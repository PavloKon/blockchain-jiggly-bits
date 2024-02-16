import { styled, Typography } from "@mui/material";

export const TypoModalTitle = styled(Typography)(({ theme }) => ({
  lineHeight: "100%",
  cursor: "default",
  fontSize: "30px",
  textDecorationLine: "underline",
  textTransform: "uppercase",
  textAlign: "center",
}));

export const TypoModalContent = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
}));
