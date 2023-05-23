import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FooterBanner from "../assets/images/bannerfooter.svg";
import LineFooter from "../assets/images/Line.svg";
const Footer = () => {
  return (
    <div>
      <Container
        sx={{ display: "flex", justifyContent: "center" }}
        component="main"
      >
        <Box
          component="img"
          src={FooterBanner}
          sx={{
            width: {
              xs: "173px",
              sm: "300px",
              md: "380px",
            },
          }}
        />
      </Container>
      <Typography
        textAlign={"center"}
        marginTop={"-10px"}
        fontWeight={"400"}
        color={"#454F5B"}
        sx={{
          fontSize: {
            xs: "11px",
            sm: "18px",
            md: "26px",
          },
        }}
      >
        © 2023 - Bản quyền thuộc về <strong>HDBank</strong> | Hotline: 1900 6060
        (24/7)
      </Typography>

      <Box sx={{ width: "100%", mt: "6px" }}>
        <img
          style={{
            display: "block",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
          src={LineFooter}
          alt=""
        />
      </Box>
    </div>
  );
};

export default Footer;
