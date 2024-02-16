import React from "react";
import {
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import {
  CardContainer,
  CardItem,
  ButtonFirst,
  ButtonSecond,
  InputLink,
  TypoModalContent,
} from "../../../components";

const SectionHowItWorks = () => {
  return (
    <CardContainer>
      <Typography variant="body1" color="txtTitle" textAlign="center" mb={1.5}>
        How It Works:
      </Typography>
      {/* <Typography variant="h6" textAlign="center" mb={2}>
        How It Works:
      </Typography> */}
      <TypoModalContent variant="body2" sx={{ fontWeight: 400 }}>
        1. Deposit BNB in exchange for strippers.
      </TypoModalContent>
      <TypoModalContent variant="body2" mt={1} sx={{ fontWeight: 400 }}>
        2. Hire more strippers to increase profits.
      </TypoModalContent>
      <TypoModalContent variant="body2" mt={1} sx={{ fontWeight: 400 }}>
        3. Make it rain to claim profits.
      </TypoModalContent>
      {/* <Typography variant='body2' textAlign='center'>
        Deposit BNB to buy Strip Clubs.
        <br/> <br/>
        Once you Buy your clubs strippers will automatically start producing rewards.
        <br/> <br/>
        Rewards can be re-invested & withdrawn daily.
        <br/> <br/>
        To ensure the max rewards (8%) We recommend the following strategy:
        <br/> <br/>
        Hire more Strippers 6 Days/Week
        <br/> <br/>
        and
        <br/> <br/>
        Make it Rain 1 Day/Week
        <br/> <br/>
        This strategy has been proven to maximise returns for all users in the long term.
        <br/> <br/>
        Please note:
        <br/> <br/>
        You can not unstake BNB ; only withdraw earnings.
      </Typography> */}
    </CardContainer>
  );
};
export default SectionHowItWorks;
