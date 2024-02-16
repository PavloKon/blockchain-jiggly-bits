import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
  Stack,
  Link,
  Modal,
} from "@mui/material";
import {
  CardContainerTrans,
  CardItem,
  ButtonFirst,
  ButtonSecond,
  InputBNB,
  LiteModal,
  AuditModal,
} from "../../../components";
import { getContract, getSigner } from "../../util/commonFunc";
import { ethers } from "ethers";
import Telegram from "../../../assets/images/Telegram.png";
import Twitter from "../../../assets/images/Twitter.png";

const SectionContact = () => {
  const [showLiteModal, setShowLiteModal] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState(false);
  const onClickLite = () => {
    setShowLiteModal((prev) => !prev);
  };
  // const onClickAudit = () => {
  //   setShowAuditModal((prev) => !prev);
  // };
  return (
    <CardContainerTrans>
      {/* <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Contract{" "}
        </Typography>
      </CardItem>
      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Wallet{" "}
        </Typography>
        <Typography variant="h6" color="txtFirst">
          {" "}
          0 BNB{" "}
        </Typography>
      </CardItem>
      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Your Strippers{" "}
        </Typography>
      </CardItem>

      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Your Profit{" "}
        </Typography>
      </CardItem>

      <ButtonFirst>Buy Strip Club</ButtonFirst>

      <Divider sx={{ mt: 2, mb: 3 }} /> */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mx="auto"
        maxWidth={430}
        mb={"21px"}
      >
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            width: 53,
            height: 53,
            backgroundColor: "white",
          }}
          href="https://t.me/+tCAQcjB67Us3MGEx"
          target="_blank"
        >
          <img src={Telegram} alt="Telegram" />
        </Link>
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            width: 53,
            height: 53,
            backgroundColor: "white",
          }}
          href="https://twitter.com/jigglybitsminer?s=21&t=r4Kw6j8IOg52eBASdnJzSw"
          target="_blank"
        >
          <img src={Twitter} alt="Twitter" />
        </Link>
      </Stack>

      <Typography variant="body1" color="txtTitle" textAlign="center" mb={2.5}>
        The BNB Reward Pool with the Sexiest Daily Return and Lowest Dev Fee
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        mx="auto"
        maxWidth={430}
        mb={1}
      >
        <Box sx={{ width: "100%" }}>
          <ButtonFirst onClick={onClickLite}>Lite Paper</ButtonFirst>
        </Box>
        <Box sx={{ width: "100%" }}>
          <a
            href="https://solidity.finance/audits/JigglyBitsMiner"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <ButtonFirst>Audit</ButtonFirst>
          </a>
        </Box>
      </Stack>
      <Typography variant="body1" color="txtTitle" textAlign="center" mt={2.5}>
        DISCLAIMER
      </Typography>
      <Typography
        variant="body2"
        color="txtTitle"
        textAlign="center"
        mt={0}
        sx={{ letterSpacing: "-0.4px", fontSize: "10px" }}
      >
        Decentralized Finance (Defi) is a brand new industry & not guaranteed,
        therefore it is labeled as "High Risk"; Please only invest what you can
        afford to lose.
      </Typography>
      {showLiteModal ? <LiteModal onClose={onClickLite} /> : ""}
      {/* {showAuditModal ? <AuditModal onClose={onClickAudit} /> : ""} */}
    </CardContainerTrans>
  );
};
export default SectionContact;
