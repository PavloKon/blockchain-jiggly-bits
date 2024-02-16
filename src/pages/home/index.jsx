import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo.png";
import { Stack, Typography, Paper, Box, Button } from "@mui/material";

import SectionContact from "./Sections/Contact";
import SectionBuyBNB from "./Sections/BuyBNB";
import SectionDaily from "./Sections/Daily";
import SectionRefer from "./Sections/Refer";
import SectionHowItWorks from "./Sections/HowItWorks";
import {
  connectWallet,
  getContract,
  getWalletBalance,
} from "../util/commonFunc";

const HomePage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [contractBalance, setContractBalance] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);
  const [yourProfit, setYourProfit] = useState(0);
  const [yourStrippers, setYourStrippers] = useState(0);
  const [contract, setContract] = useState(undefined);
  const [referUrl, setReferUrl] = useState("");
  const [isConnected, setIsConnected] = useState(null);
  const [isClaimEnable, setIsClaimEnable] = useState(false);
  const [isRecompoundEnable, setIsRecompoundEnable] = useState(false);
  const timerId = useRef(0);

  const [remainTimeRecomp, setRemainTimeRecomp] = useState(-1);
  const [remainTimeClaim, setRemainTimeClaim] = useState(-1);

  useEffect(() => {
    timerId.current = setInterval(() => {
      const recomp = new Date(JSON.parse(localStorage.getItem("recompound")));
      const claim = new Date(JSON.parse(localStorage.getItem("claim")));
      const currentDate = new Date();
      const diffRecomp = currentDate - recomp;
      const diffClaim = currentDate - claim;

      if (diffRecomp / 1000 > process.env.REACT_APP_RECOMPOUND) {
        setRemainTimeRecomp(-1);
        setIsRecompoundEnable(true);
      } else {
        setRemainTimeRecomp(
          (process.env.REACT_APP_RECOMPOUND - diffRecomp / 1000).toFixed()
        );
        setIsRecompoundEnable(false);
      }

      if (diffClaim / 1000 > process.env.REACT_APP_CLAIM) {
        setRemainTimeClaim(-1);
        setIsClaimEnable(true);
      } else {
        setRemainTimeClaim(
          (process.env.REACT_APP_CLAIM - diffClaim / 1000).toFixed()
        );
        setIsClaimEnable(false);
      }
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        if (contract) {
          setContractBalance(
            parseFloat(
              ethers.utils.formatUnits(await contract.getBalance())
            ).toFixed(4)
          );
          setWalletBalance(await getWalletBalance(walletAddress));
          setYourProfit(
            parseFloat(
              ethers.utils.formatUnits(
                await contract.striperRewards(walletAddress)
              )
            ).toFixed(4)
          );
          setYourStrippers(
            parseFloat(await contract.getMyMiners(walletAddress))
          );
        }
      } catch (e) {
        return;
      }
    };
    fetchFunc();
    setIsConnected(localStorage.getItem("wallet"));
  }, [contract, contractBalance, walletAddress]);

  useEffect(() => {
    // console.log('__ 11 __ ', isConnected);
    if (isConnected === "connected") {
      connectHandler();
    }
  }, [isConnected]);

  useEffect(() => {
    // console.log('__ 22 __ ', walletAddress);
    setReferUrl(
      walletAddress ? process.env.REACT_APP_BASE_URL + walletAddress : ""
    );
  }, [walletAddress]);

  const connectHandler = async () => {
    const connectResponse = await connectWallet();
    setWalletAddress(connectResponse.address);
    if (connectResponse.address) {
      const cont = getContract();
      setContract(cont);
      localStorage.setItem("wallet", "connected");
    }
  };

  const disConnectHandler = () => {
    setWalletAddress("");
    setContract(undefined);

    localStorage.removeItem("wallet");
    setWalletAddress(0);
    setContractBalance(0);
    setWalletBalance(0);
    setYourProfit(0);
    setYourStrippers(0);
    setReferUrl("");
  };

  const connectWalletButton = () => {
    return (
      <Button
        variant="contained"
        sx={{
          zIndex: 100,
          position: "absolute",
          top: 40,
          right: {
            sm: 24,
            xs: "inherit",
          },
          width: {
            sm: 150,
            xs: 370,
          },
          maxWidth: "calc(100% - 90px)",
          height: 64,
          backgroundColor: "#135BE8",
          color: "white",
          fontSize: "18px",
          opacity: 0.7,
          "&:hover": {
            opacity: 1,
            backgroundColor: "#135BE8",
          },
        }}
        onClick={walletAddress ? disConnectHandler : connectHandler}
      >
        {walletAddress ? "Disconnect" : "Connect"}
      </Button>
    );
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={2}
      mx="auto"
      maxWidth={430}
      pb={3}
    >
      {connectWalletButton()}

      <Typography
        variant="body2"
        color="txtTitle"
        textAlign="center"
        sx={{
          letterSpacing: "-0.4px",
          fontSize: "10px",
          margin: "0 32px !important",
        }}
      >
        Recommend to use MetaMask browser on your MetaMask app. If you do not
        have MetaMask; please download in the App Store or Google Play Store and
        make sure you are connected to Binance Smart Chain Network.
      </Typography>

      <Link to="/">
        <img src={LogoImg} alt="Jiggly Bits" />
      </Link>
      <Typography
        variant="h4"
        color="txtFirst"
        textAlign="center"
        textTransform="uppercase"
        sx={{ cursor: "default" }}
      >
        Jiggly Bits
      </Typography>

      <SectionContact />
      <SectionHowItWorks />
      <SectionBuyBNB
        remainTimeClaim={remainTimeClaim}
        remainTimeRecomp={remainTimeRecomp}
        isClaimEnable={isClaimEnable}
        isRecompoundEnable={isRecompoundEnable}
        walletAddress={walletAddress}
        contract={contract}
        contractBalance={contractBalance}
        setContractBalance={setContractBalance}
        walletBalance={walletBalance}
        yourProfit={yourProfit}
        yourStrippers={yourStrippers}
      />
      <SectionDaily />
      <SectionRefer referUrl={referUrl} />
    </Stack>
  );
};

export default HomePage;
