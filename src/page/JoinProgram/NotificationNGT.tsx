import { Grid, Typography } from "@mui/material";
import React from "react";
import IconI from "../../assets/images/i.svg";
const NotificationNGT = () => {
  return (
    <div
      style={{
        padding: "6px 16px",
        border: "1px solid #EAEEF2",
        borderRadius: "8px",
        boxShadow: "0px 2px 16px rgba(33, 43, 54, 0.05)",
        marginTop: "-58px",
        transform: "translate(10px, 10px)",
        background: "#E5F3FF",
      }}
    >
      <Grid container>
        <Grid item xs={1}>
          <img
            style={{ padding: "14.83px 13.83px 0 0", textAlign: "center" }}
            src={IconI}
            alt=""
          />
        </Grid>
        <Grid item xs={11}>
          <Typography
            sx={{
              my: "14px",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.17px",
              color: "#006FD6",
            }}
          >
            Mã NGT của bạn là 0332011609.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotificationNGT;
