import { useEffect } from "react";
import LogoImg from "../../assets/images/logo.png";
import { Stack, Link } from "@mui/material";
import Telegram from "../../assets/images/Telegram.png";
import Twitter from "../../assets/images/Twitter.png";
import LanguageIcon from "@mui/icons-material/Language";

import {
  ModalWrapper,
  ModalBackground,
  ModalPaper,
  TypoModalTitle,
  TypoModalContent,
} from "../index";

export const AuditModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });
  return (
    <ModalWrapper>
      <ModalBackground onClick={onClose} />
      <ModalPaper onDoubleClick={onClose} style={{ top: "auto" }}>
        <img
          src={LogoImg}
          onClick={onClose}
          style={{ width: "fit-content" }}
          alt="Jiggly Bits"
        />

        {/* <TypoModalContent variant="body2" mt={4}>
          (Coming Soon)
        </TypoModalContent> */}
        <TypoModalTitle variant="h4" color="txtFirst">
          Audit by Solidity Finance
        </TypoModalTitle>
        {/* <TypoModalContent variant="body2" mt={1}>
          Defi Project on binnace smart chain
        </TypoModalContent> */}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mx="auto"
          maxWidth={430}
          mt={3}
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
            href="https://solidity.finance/"
            target="_blank"
          >
            <LanguageIcon
              fontSize="large"
              sx={{ path: { color: "#13B3E8" } }}
            />
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

        {/* <TypoModalContent variant="body2" mt={2} mb={"21px"}>
          Our 
        </TypoModalContent> */}
        <TypoModalContent variant="body2" mt={2} mb={"21px"}>
          <a
            href="https://solidity.finance/audits/JigglyBitsMiner"
            target="_blank" rel="noreferrer"
          >
            https://solidity.finance/audits/JigglyBitsMiner/
          </a>
        </TypoModalContent>
      </ModalPaper>
    </ModalWrapper>
  );
};
