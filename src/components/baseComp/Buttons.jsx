import React, { useState } from "react";
import {
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const ButtonFirst = ({ children, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      size="large"
      color="primary"
      sx={{
        height: 56,
        textTransform: "none",
        borderRadius: "9px",
      }}
      {...otherProps}
    >
      <Typography variant="h6" color="white" sx={{ lineHeight: "120%" }}>
        {children}
      </Typography>
    </Button>
  );
};

export const ButtonSecond = ({ children, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      size="large"
      color="primary"
      sx={{
        height: 56,
        textTransform: "none",
        borderRadius: "9px",
      }}
      {...otherProps}
    >
      <Typography variant="h6" color="white" sx={{ lineHeight: "120%" }}>
        {children}
      </Typography>
    </Button>
  );
};

export const InputBNB = ({ bnbAmount, setBnbAmount }) => {
  return (
    <Box
      mb={3}
      backgroundColor="white"
      sx={{
        border: "1px solid #ACBABF",
        borderRadius: "9px",
        position: "relative",
        marginBottom: "15px",
        height: "56px",
      }}
    >
      <InputBase
        sx={{
          p: "10px 62px 10px 20px",
          width: "100%",
          "& .MuiInputBase-input": {
            textAlign: "right",
            p: "4px 4px",
          },
        }}
        placeholder={bnbAmount + ""}
        onChange={(e) => setBnbAmount(e.target.value < 0 ? 0 : e.target.value)}
      />
      <Typography
        component="p"
        p={"8px 0"}
        sx={{
          position: "absolute",
          right: "20px",
          top: "5px",
        }}
      >
        BNB
      </Typography>
    </Box>
  );
};

export const InputLink = ({ referUrl, onClickCopy }) => {
  return (
    <Box
      mb={3}
      backgroundColor="white"
      sx={{
        border: "1px solid #ACBABF",
        borderRadius: "9px",
        position: "relative",
        marginBottom: "15px",
        minHeight: "56px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{
          fontSize: "15px",
          lineHeight: "160%",
          width: "100%",
          color: "#2F5765",
          p: "10px 10px 10px 20px",
          "& .MuiInputBase-input": {
            textAlign: "right",
            p: "4px 4px",
          },
        }}
        value={referUrl}
        endAdornment={
          <InputAdornment onClick={onClickCopy}>
            <ContentCopyIcon
              sx={{ padding: "0 10px", width: "auto", cursor: "pointer" }}
            />
          </InputAdornment>
        }
      />
    </Box>
  );
};

export const SocialButtonIcon = ({ children }) => {
  return <Box>{children}</Box>;
};
