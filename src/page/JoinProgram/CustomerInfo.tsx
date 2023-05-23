import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import IconI from "../../assets/images/i.svg";
import IosShareIcon from "@mui/icons-material/IosShare";
import QRHd from "../../assets/images/qr.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import NotificationNGT from "./NotificationNGT";
import { useNavigate } from "react-router-dom";
const CustomerInfo = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `detail`;
    navigate(path);
  };
  return (
    <Container maxWidth="xl" sx={{ mb: "19px" }}>
      <CssBaseline />
      {/* <NotificationNGT /> */}
      <div
        style={{
          padding: "6px 16px",
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 16px rgba(33, 43, 54, 0.05)",
          marginTop: "-62px",
          transform: "translate(10px, 10px)",
          background: "#E5F3FF",
          display: "grid",
          justifyContent: "space-around",
        }}
      >
        <Grid container>
          <Grid item xs={1}>
            <Box
              component="img"
              src={IconI}
              sx={{
                padding: "14.83px 13.83px 0 0",
                width: {
                  sm: "28px",
                  md: "42px",
                  lg: "48px",
                  xl: "62px",
                },
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              sx={{
                my: "14px",
                fontSize: {
                  xs: "14px",
                  sm: "28px",
                  md: "32px",
                  lg: "38px",
                  xl: "62px",
                },
                fontWeight: 400,
                letterSpacing: "0.17px",
                color: "#006FD6",
              }}
            >
              Mã NGT của bạn là 0332011609. Vui lòng đăng ký đầy đủ thông tin để
              nhận được hoa hồng.{" "}
              <Link
                sx={{
                  color: "#454F5B",
                  textDecorationColor: "#454F5B",
                  fontWeight: 600,
                }}
                href="#"
              >
                Cập nhật thông tin
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
      {/* 2 */}
      <div
        style={{
          padding: "6px 16px",
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 0px rgba(33, 43, 54, 0.05)",
          marginTop: "16px",
          transform: "translate(10px, 10px)",
          background: "white",
        }}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={11}>
                <Typography
                  sx={{
                    mt: "16px",
                    fontSize: {
                      xs: "16px",
                      sm: "28px",
                      md: "30px",
                      lg: "38px",
                      xl: "62px",
                    },
                    fontWeight: 600,
                    color: "#212B36",
                  }}
                >
                  Hồ sơ giới thiệu
                </Typography>
              </Grid>
              <Grid item xs={1} sx={{ mt: "10px", textAlign: "right" }}>
                <IconButton>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider sx={{ my: "16px" }} />
            <Grid
              onClick={routeChange}
              container
              justifyContent={"space-between"}
              sx={{ mb: "16px" }}
            >
              <Grid item>
                <Typography
                  sx={{
                    color: "#7E8996",
                    fontSize: {
                      xs: "14px",
                      sm: "28px",
                      md: "24px",
                      lg: "38px",
                      xl: "62px",
                    },
                  }}
                >
                  Tổng số hồ sơ đã giới thiệu
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    color: "#212B36",
                    fontSize: {
                      xs: "14px",
                      sm: "28px",
                      md: "24px",
                      lg: "38px",
                      xl: "62px",
                    },
                  }}
                >
                  50
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* 3 */}
      <div
        style={{
          padding: "0 8px",
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 0px rgba(33, 43, 54, 0.05)",
          marginTop: "16px",
          transform: "translate(10px, 10px)",
          background: "white",
        }}
      >
        <form>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  mt: "16px",
                  fontSize: {
                    xs: "16px",
                    sm: "28px",
                    md: "30px",
                    lg: "38px",
                    xl: "62px",
                  },
                  fontWeight: 600,
                  color: "#212B36",
                }}
              >
                Giới thiệu sản phẩm
              </Typography>
              <Divider sx={{ my: "16px" }} />
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "28px",
                    md: "24px",
                    lg: "38px",
                    xl: "62px",
                  },
                }}
              >
                Chi nhánh giới thiệu
              </Typography>
              <TextField
                select
                sx={{ mt: "4px" }}
                variant="outlined"
                fullWidth
                id=""
                label="002 - CN Phú Nhuận"
                name=""
                autoComplete=""
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "28px",
                    md: "24px",
                    lg: "38px",
                    xl: "62px",
                  },
                }}
              >
                Chọn sản phẩm muốn giới thiệu
              </Typography>
              <TextField
                select
                sx={{
                  mt: "4px",
                }}
                variant="outlined"
                fullWidth
                id=""
                label="HDBank x Petrolimex 4 in 1"
                name=""
                autoComplete=""
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              item
              xs={12}
            >
              <Box
                sx={{
                  mt: "24px",
                  width: { md: "360px", lg: "420px", xl: "240px" },
                }}
                component="img"
                src={QRHd}
              />
            </Grid>
            <Grid margin={"16px 0 24px 0"}>
              <Button
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    background: "#1890FF",
                  },
                  color: "#E5F3FF",
                  background: "#1890FF",
                  fontSize: {
                    xs: "13px",
                    sm: "20px",
                    md: "24px",
                    lg: "28px",
                    xl: "34px",
                  },
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "50px",
                  m: "4.5px 10px 4.5px 11.6px",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                }}
              >
                <IosShareIcon
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "28px",
                      lg: "30px",
                      xl: "60px",
                    },
                    m: "7.5px 11.6px 8px 11px",
                  }}
                />{" "}
                Chia sẻ link & QR để giới thiệu
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default CustomerInfo;
