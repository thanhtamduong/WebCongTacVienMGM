import React from "react";
import BgHD from "../assets/images/Rectangle.svg";
import { Grid, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Grid
      style={{
        width: "100%",
        position: "relative",
        marginTop: "70px",
        marginBottom: "-10px",
        top: "0px",
      }}
    >
      <div
        style={{
          left: "8.8%",
          right: "53.33%",
          top: "29.38%",
          bottom: "8.12%",
          marginLeft: "33px",
          marginBottom: "17.13px",
          position: "absolute",
          fontSize: "14px",
          fontWeight: "300",
          letterSpacing: "-0.3px",
          width: "max-content",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "14px", sm: "32px", md: "36px", lg: "42px" } }}
        >
          Chương trình <br /> <b>“Người giới thiệu”</b> <br /> của HDBank
        </Typography>
      </div>
      <div>
        {/* height: "211px" */}
        <img style={{ objectFit: "fill", width: "100%" }} src={BgHD} alt="" />
      </div>
    </Grid>
  );
};

export default Banner;
