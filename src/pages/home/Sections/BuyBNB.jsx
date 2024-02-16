import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  CardContainer,
  CardItem,
  ButtonFirst,
  ButtonSecond,
  InputBNB,
} from "../../../components";
import { getContract, getSigner } from "../../util/commonFunc";
import { ethers } from "ethers";

const SectionBuyBNB = ({
  remainTimeClaim,
  remainTimeRecomp,
  isClaimEnable,
  isRecompoundEnable,
  walletAddress,
  contract,
  contractBalance,
  setContractBalance,
  walletBalance,
  yourProfit,
  yourStrippers,
}) => {
  const [bnbAmount, setBnbAmount] = useState(0);
  const [notifyRecomp, setNotifyRecomp] = useState(false);
  const [notifyClaim, setNotifyClaim] = useState(false);

  const onClickRecompBox = () => {
    if (isRecompoundEnable) return;
    setNotifyRecomp(true);
  };
  const onClickClaimBox = () => {
    if (isClaimEnable) return;
    setNotifyClaim(true);
  };

  const timeToDate = (seconds) => {
    var tday = Math.floor(seconds / (3600 * 24));
    var thour = Math.floor((seconds % (3600 * 24)) / 3600);
    var tmin = Math.floor((seconds % 3600) / 60);
    var tsec = Math.floor(seconds % 60);

    // const tstring =
    //   (tday && tday + "d ") +
    //   (thour && thour + "h ") +
    //   tmin +
    //   "m " +
    //   tsec +
    //   "s";
    if (seconds <= 0) return "All set";
    const tstring =
      (tday && tday + (tday > 1 ? " days " : " day ")) +
      (thour > 9 ? thour : "0" + thour) +
      ":" +
      (tmin > 9 ? tmin : "0" + tmin) +
      ":" +
      (tsec > 9 ? tsec : "0" + tsec);
    return tstring;
  };

  const buyStripper = async () => {
    try {
      if (!walletAddress) {
        alert("connect your wallet");
        return;
      }
      const options = { value: ethers.utils.parseEther(bnbAmount) };
      if (contract) {
        let tx = await contract.buyStripers(walletAddress, options);
        setTimeout(
          async () =>
            setContractBalance(
              parseFloat(
                ethers.utils.formatUnits(await contract.getBalance())
              ).toFixed(4)
            ),
          5000
        );
        // if (tx.hash) {
        //   console.log('tx.hash: ', tx.hash);
        // }
      }
    } catch (e) {}
  };

  const hireStrippers = async () => {
    try {
      // const options = { value: ethers.utils.parseEther(bnbAmount) };
      const recomp = new Date(JSON.parse(localStorage.getItem("recompound")));
      const currentDate = new Date();
      const diffInMs = currentDate - recomp;

      if (diffInMs / 1000 > process.env.REACT_APP_RECOMPOUND) {
        let tx = await contract.hatchStripers(walletAddress);
        setTimeout(
          async () =>
            setContractBalance(
              parseFloat(
                ethers.utils.formatUnits(await contract.getBalance())
              ).toFixed(4)
            ),
          5000
        );
        if (tx.hash) {
          localStorage.setItem("recompound", JSON.stringify(new Date()));
        }
      } else {
        // console.log('You should wait ', ((1000 * 30 - diffInMs)/1000/60).toFixed(1), 'minute to recompound');
        // console.log(
        //   "You should wait ",
        //   ((process.env.REACT_APP_RECOMPOUND - diffInMs) / 1000 / 60 / 60).toFixed(1),
        //   "hours to recompound"
        // );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const makeRain = async () => {
    // const contract = getContract();
    try {
      const recomp = new Date(JSON.parse(localStorage.getItem("claim")));
      const currentDate = new Date();
      const diffInMs = currentDate - recomp;

      if (diffInMs / 1000 > process.env.REACT_APP_CLAIM) {
        let tx = await contract.sellStripers();
        // console.log("___ tx tx", tx);
        setTimeout(
          async () =>
            setContractBalance(
              parseFloat(
                ethers.utils.formatUnits(await contract.getBalance())
              ).toFixed(4)
            ),
          5000
        );
        if (tx.hash) {
          localStorage.setItem("claim", JSON.stringify(new Date()));
        }
      } else {
        // console.log('You should wait ', ((1000 * 60 * 2 - diffInMs)/1000/60).toFixed(1), 'minute to recompound');
        // console.log(
        //   "You should wait ",
        //   ((process.env.REACT_APP_CLAIM - diffInMs) / 1000 / 60 / 60).toFixed(1),
        //   "hours to claim"
        // );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardContainer>
      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Contract{" "}
        </Typography>
        <Typography variant="h6" color="txtFirst" textAlign="right">
          {" "}
          {contractBalance} BNB{" "}
        </Typography>
      </CardItem>
      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Wallet{" "}
        </Typography>
        <Typography variant="h6" color="txtFirst" textAlign="right">
          {" "}
          {walletBalance} BNB{" "}
        </Typography>
      </CardItem>

      <InputBNB bnbAmount={bnbAmount} setBnbAmount={setBnbAmount} />

      <ButtonFirst
        onClick={buyStripper}
        disabled={walletAddress ? false : true}
        // disabled={walletAddress ? true : false}
      >
        Buy Strip Club
      </ButtonFirst>
      <Typography variant="body2" textAlign="center" mt="6px" mb={3}>
        (Deposit)
      </Typography>

      <Divider sx={{ mt: 2, mb: 3 }} />

      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Your Strippers{" "}
        </Typography>
        <Typography variant="h6" color="txtFirst" textAlign="right">
          {" "}
          {yourStrippers} STRIPPERS{" "}
        </Typography>
      </CardItem>

      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Your Profit{" "}
        </Typography>
        <Typography variant="h6" color="txtFirst" textAlign="right">
          {" "}
          {yourProfit} BNB{" "}
        </Typography>
      </CardItem>

      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={1.5}
        mx="auto"
        maxWidth={430}
        mb={1}
      >
        <Box sx={{ width: "100%" }}>
          <Box onClick={onClickRecompBox}>
            <ButtonSecond
              disabled={walletAddress && isRecompoundEnable ? false : true}
              onClick={hireStrippers}
            >
              Hire Strippers
            </ButtonSecond>
          </Box>
          <Snackbar
            open={notifyRecomp}
            autoHideDuration={300000}
            onClose={() => {
              // console.log("clicked close recompound");
              setNotifyRecomp(false);
            }}
            message="Copied to clipboard"
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setNotifyRecomp(false)}
              severity="info"
              sx={{
                background: "rgb(120 255 217 / 60%);",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {remainTimeRecomp > 0 ? (
                <>
                  Remaining for Reinvest: <br />{" "}
                  {timeToDate(remainTimeRecomp)}
                </>
              ) : (
                "You can now Reinvest!"
              )}
            </Alert>
          </Snackbar>
          <Typography variant="body2" textAlign="center" mt={1}>
            (Reinvest)
          </Typography>
          {/* <Typography variant="body2" textAlign="center" color="txtFirst" mt={1}>
            {remainTimeRecomp >= 0 ? timeToDate(remainTimeRecomp) : ""}
          </Typography> */}
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box onClick={onClickClaimBox}>
            <ButtonSecond
              disabled={walletAddress && isClaimEnable ? false : true}
              onClick={makeRain}
            >
              Make It Rain
            </ButtonSecond>
          </Box>
          <Snackbar
            open={notifyClaim}
            autoHideDuration={300000}
            onClose={() => setNotifyClaim(false)}
            message="Copied to clipboard"
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setNotifyClaim(false)}
              severity="info"
              sx={{
                background: "rgb(120 255 217 / 60%);",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {remainTimeClaim > 0 ? (
                <>
                  Remaining for Claim: <br /> {timeToDate(remainTimeClaim)}
                </>
              ) : (
                "You can now Claim!"
              )}
            </Alert>
          </Snackbar>
          <Typography variant="body2" textAlign="center" mt={1}>
            (Claim)
          </Typography>
          {/* <Typography variant="body2" textAlign="center" color="txtFirst" mt={1}>
            {remainTimeClaim >= 0 ? timeToDate(remainTimeClaim) : ""}
          </Typography> */}
        </Box>
      </Stack>
    </CardContainer>
  );
};
export default SectionBuyBNB;
