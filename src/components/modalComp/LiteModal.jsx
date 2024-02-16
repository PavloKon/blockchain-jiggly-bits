import { useEffect } from "react";
import LogoImg from "../../assets/images/logo.png";
import { Typography, Box, Modal, Backdrop, Fade, Link } from "@mui/material";
import {
  ModalWrapper,
  ModalBackground,
  ModalPaper,
  TypoModalTitle,
  TypoModalContent,
} from "../index";

export const LiteModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });
  return (
    <ModalWrapper>
      <ModalBackground onClick={onClose} />
      <ModalPaper onDoubleClick={onClose}>
        <img
          src={LogoImg}
          onClick={onClose}
          style={{ width: "fit-content" }}
          alt="Jiggly Bits"
        />

        <TypoModalTitle variant="h4" color="txtFirst" mt={4}>
          Jiggly Bits Miner
        </TypoModalTitle>
        <TypoModalContent variant="body2" mt={1}>(LITE PAPER)</TypoModalContent>
        <TypoModalContent variant="body2" mt={1}>
          Defi Project on binance smart chain
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={2}>
          Please verify us on binance smart chain
        </TypoModalContent>
        <TypoModalContent
          variant="body2"
          sx={{ textDecorationLine: "underline", wordBreak: 'break-word' }}
          mt={1}
        >
          <a
            href="https://bscscan.com/address/0xC0A16FE6DBa8Ed36BdfDfD1b52A0a71Df906012D"
            target="_blank"
          >
            contract : 0xC0A16FE6DBa8Ed36BdfDfD1b52A0a71Df906012D
          </a>
        </TypoModalContent>
        {/* <TypoModalContent variant="body2">
          (Enter this contract number on jigglybits.money)
        </TypoModalContent> */}

        <TypoModalTitle variant="h4" color="txtFirst" mt={4}>
          The worlds first decentralized strip club
        </TypoModalTitle>

        <TypoModalContent variant="body2" sx={{ fontSize: "15px" }} mt={1}>
          buy | earn | claim
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={2}>
          become an owner & earn up to 8% daily rewards with as little as $5
        </TypoModalContent>

        <TypoModalTitle variant="h4" color="txtFirst" mt={4}>
          How it works
        </TypoModalTitle>

        <TypoModalContent variant="body2" mt={1}>
          1. Deposit BNB in exchange for strippers.
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={1}>
          2. Hire more strippers to increase profits.
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={1}>
          3. Make it rain to claim profits.
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={3}>
          Once BNB is deposited your strippers will start making up to 8% roi
          daily.
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={2}>
          The more strippers you hire the more profits you will earn.
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={2}>
          Profits can be re-invested & withdrawn daily
        </TypoModalContent>
        <TypoModalContent variant="body2" mt={2}>
          Please note you cannot un-stake BNB ; only withdraw profits
        </TypoModalContent>
      </ModalPaper>
    </ModalWrapper>
  );
};
