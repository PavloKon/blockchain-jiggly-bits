import React, { useState } from "react";
import { Typography, Snackbar, Alert } from "@mui/material";
import { CardContainer, InputLink } from "../../../components";

const SectionRefer = ({ referUrl }) => {
  const [open, setOpen] = useState(false);
  const handleClickCopy = () => {
    if (referUrl) {
      setOpen(true);
      navigator.clipboard.writeText(referUrl);
      // window.clipboardData.setData("Text", referUrl);
    }
  };
  return (
    <CardContainer>
      <Typography variant="h6" textAlign="center" mb={1}>
        Referral Link
      </Typography>
      <InputLink onClickCopy={handleClickCopy} referUrl={referUrl}></InputLink>
      <Typography variant="body2" textAlign="center">
        Earn 12% of the Dev fee, from anyone who uses your referral link
      </Typography>

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        message="Copied to clipboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ background: "rgb(113 229 118 / 67%)", fontWeight: 600 }}
        >
          Copied to clipboard
        </Alert>
      </Snackbar>
    </CardContainer>
  );
};
export default SectionRefer;
