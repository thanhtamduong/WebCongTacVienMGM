import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `customerinfo`;
    navigate(path);
  };
  return (
    <Container component="main" maxWidth="md" sx={{ mb: "13px" }}>
      <CssBaseline />
      <div
        style={{
          //   padding: "40px 16px",
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 16px rgba(33, 43, 54, 0.05)",
          marginTop: "-62px",
          transform: "translate(10px, 10px)",
          background: "white",
        }}
      >
        <Typography
          fontSize={{
            xs: "22px",
            sm: "32px",
            md: "38px",
            lg: "42px",
            xl: "62px",
          }}
          fontWeight={"600"}
          color={"#BE1128"}
          textAlign={"center"}
          margin={"40px 0 2px 0"}
        >
          XÁC THỰC
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              sm: "22px",
              md: "32px",
            },
            textAlign: "center",
            fontWeight: 400,
            mb: "40px",
          }}
        >
          Mã OTP được gửi về số điện thoại 0332011609
        </Typography>

        <form>
          <Grid
            xs={12}
            container
            sx={{ justifyContent: "center", mb: "34px" }}
            padding={"0px 14px"}
          >
            <Grid
              item
              width={"100%"}
              xs={12}
              container
              justifyContent="space-evenly"
            >
              {[0, 1, 2, 3, 4, 5].map(() => (
                <Grid item>
                  <TextField
                    sx={{ width: "38.5px", height: "38px" }}
                  ></TextField>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid xs={12} container justifyContent={"center"} gap={"10px"}>
            <Grid item>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "22px",
                    md: "32px",
                    lg: "42px",
                    xl: "52px",
                  },
                  color: "#B6BEC8",
                  textAlign: "center",
                  fontWeight: 400,
                  mb: "40px",
                }}
              >
                Mã xác thực còn hiệu lực trong
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "22px",
                    md: "32px",
                    lg: "42px",
                    xl: "52px",
                  },
                  color: "black",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                89s
              </Typography>
            </Grid>
          </Grid>
          <Grid textAlign={"center"}>
            <Button
              sx={{
                "&.MuiButtonBase-root:hover": {
                  background: "#FFD643",
                },
                padding: "16px 24px",
                color: "#212B36",
                background: "#FFD643",
                fontSize: {
                  xs: "13px",
                  sm: "20px",
                  md: "30px",
                  lg: "36px",
                  xl: "48px",
                },
                fontWeight: 700,
                textTransform: "none",
                borderRadius: "50px",
              }}
              onClick={routeChange}
            >
              Xác nhận
            </Button>
            <Grid
              textAlign={"center"}
              fontSize={{
                xs: "12px",
                sm: "22px",
                md: "28px",
              }}
              marginY={"40px"}
              item
              xs={12}
            >
              <Link href="#">Gửi lại OTP</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Verification;
