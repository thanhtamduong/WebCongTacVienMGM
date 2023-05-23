import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoHD from "../assets/images/hdbank.svg";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <Box sx={{}}>
        <AppBar sx={{ background: "white", boxShadow: "none" }}>
          <Toolbar>
            <Grid container>
              <Grid xs={2}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <ArrowBackIcon sx={{ color: "black" }} />
                </IconButton>
              </Grid>
              <Grid
                xs={10}
                sx={{ display: "flex", justifyContent: "center", ml: "-4%" }}
              >
                <img src={LogoHD} alt="" />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Banner />
      </Box>
    </>
  );
};

export default Header;
