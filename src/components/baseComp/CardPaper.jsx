import { Paper, Box, styled } from "@mui/material";

export const CardItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 25,
}));

export const CardContainer = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: "100%",
  backgroundColor: "white",
  borderRadius: 20,
  boxShadow: "0px 4px 20px rgba(36, 106, 242, 0.1)",
  padding: 30,
}));

export const CardContainerTrans = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: "100%",
  borderRadius: 20,
  padding: "4px 30px 12px",
}));

export const ModalWrapper = styled(Box)(({ theme }) => ({
  zIndex: 101,
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // overflow: 'auto',
  overflowX: "hidden",
  overflowY: "overlay",
  marginTop: "20px",
  marginBottom: "20px",
  borderRadius: "10px",
}));

export const ModalBackground = styled(Box)(({ theme }) => ({
  zIndex: 10,
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const ModalPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E6FBFE",
  width: "80%",
  maxWidth: "535px",
  margin: 0,
  position: "absolute",
  // overflow: 'overlay',
  top: 0,
  alignSelf: "center",
  left: "auto",
  right: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 10,
  // backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  borderRadius: "15px",
}));
