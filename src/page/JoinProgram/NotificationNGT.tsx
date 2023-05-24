import { Alert, Box, Grid, Typography } from "@mui/material";
import React from "react";
import IconI from "../../assets/images/i.svg";
const NotificationNGT = () => {
  return (
    <Grid
      mt={{
        xs: "-48px",
        sm: "-85px",
        md: "-102px",
        lg: "-124px",
      }}
    >
      <div
        style={{
          padding: "6px 16px ",
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 16px rgba(33, 43, 54, 0.05)",
          transform: "translate(10px, 10px)",
          background: "#E5F3FF",
          justifyContent: "space-around",
        }}
      >
        <Grid
          container
          py={{
            md: "20px",
          }}
        >
          <Grid item xs={12}>
            <Alert
              severity="info"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "28px",
                  md: "32px",
                },
                fontWeight: 400,
                letterSpacing: "0.17px",
                color: "#006FD6",
              }}
            >
              Mã NGT của bạn là 0332011609.
            </Alert>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotificationNGT;
