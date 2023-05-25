import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import IosShareIcon from "@mui/icons-material/IosShare";
import QRHd from "../../assets/images/qr.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import NotificationNGT from "./NotificationNGT";
import { useNavigate } from "react-router-dom";
import NotificationUpdateNGT from "./NotificationUpdateNGT";
import NotificationNGT from "./NotificationNGT";
import React, { useState } from "react";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const CustomerInfo = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `detail`;
    navigate(path);
  };
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <Container maxWidth="md" sx={{ mb: "19px" }}>
      <CssBaseline />
      <NotificationUpdateNGT />
      {/* <NotificationNGT /> */}
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
                  mt={"16px"}
                  fontSize={{
                    xs: "16px",
                    sm: "28px",
                    md: "34px",
                  }}
                  fontWeight={"600"}
                  color={"#212B36"}
                >
                  Hồ sơ giới thiệu
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                sx={{ mt: "10px", textAlign: "right" }}
                onClick={() => setShow(!show)}
              >
                <IconButton>
                  {show === false ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpIcon />
                  )}
                </IconButton>
              </Grid>
            </Grid>
            <Divider sx={{ my: "16px" }} />
            <Grid mb={"16px"}>
              {/* //Event */}
              {/* DataPicker */}
              {show && (
                <Grid mb={"35px"} container justifyContent={"space-between"}>
                  <Grid item xs={6} pr={"10px"}>
                    <Typography
                      fontWeight={"600"}
                      color={"#212B36"}
                      mb={"10px"}
                      fontSize={{
                        xs: "14px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      Chọn tháng bắt đầu
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        sx={{ width: "100%" }}
                        label=""
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6} pl={"10px"}>
                    <Typography
                      fontWeight={"600"}
                      mb={"10px"}
                      color={"#212B36"}
                      fontSize={{
                        xs: "14px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      Chọn tháng kết thúc
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        sx={{ width: "100%" }}
                        label=""
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              )}

              {/* 1 */}
              <Grid
                container
                justifyContent={"space-between"}
                onClick={routeChange}
                alignItems={"center"}
              >
                <Grid item>
                  <Typography
                    color={"#7E8996"}
                    fontSize={{
                      xs: "12px",
                      sm: "20px",
                      md: "22px",
                    }}
                  >
                    Số lượng hồ sơ đã giới thiệu
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display={"flex"}
                    alignItems={"center"}
                    color={"#212B36"}
                    fontSize={{
                      xs: "12px",
                      sm: "20px",
                      md: "22px",
                    }}
                  >
                    50
                    <KeyboardArrowRightIcon
                      sx={{
                        color: "#7E8996",
                        ml: "10px",
                      }}
                    />
                  </Typography>
                </Grid>
              </Grid>
              {/* 2 */}
              {show && (
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <Typography
                      color={"#7E8996"}
                      fontSize={{
                        xs: "12px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      Số lượng hồ sơ chưa hoàn tất
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      color={"#212B36"}
                      fontSize={{
                        xs: "14px",
                        sm: "22px",
                        md: "24px",
                      }}
                    >
                      5{" "}
                      <KeyboardArrowRightIcon
                        sx={{
                          color: "#7E8996",
                          ml: "10px",
                        }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              )}
              {/* 3 */}
              {show && (
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <Typography
                      color={"#7E8996"}
                      fontSize={{
                        xs: "12px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      Số lượng hồ sơ hoàn tất
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      color={"#212B36"}
                      fontSize={{
                        xs: "14px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      45{" "}
                      <KeyboardArrowRightIcon
                        sx={{
                          alignItems: "center",
                          color: "#7E8996",
                          ml: "10px",
                        }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              )}
              {/* 4 */}
              {show && (
                <Grid container justifyContent={"space-between"}>
                  <Grid item>
                    <Typography
                      color={"#7E8996"}
                      fontSize={{
                        xs: "12px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      Số lượng hồ sơ HDBank từ chối
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      color={"#212B36"}
                      fontSize={{
                        xs: "14px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      2
                      <KeyboardArrowRightIcon
                        sx={{
                          color: "#7E8996",
                          ml: "10px",
                        }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              )}
              {/* 5 */}
              {show && (
                <Grid container justifyContent={"space-between"}>
                  <Grid item>
                    <Typography
                      color={"#7E8996"}
                      fontSize={{
                        xs: "12px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      Số lượng hồ sơ HDBank đã duyệt
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      color={"#212B36"}
                      fontSize={{
                        xs: "14px",
                        sm: "20px",
                        md: "22px",
                      }}
                    >
                      43
                      <KeyboardArrowRightIcon
                        sx={{
                          color: "#7E8996",
                          ml: "10px",
                        }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              )}
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
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12}>
              <Typography
                mt={"16px"}
                fontSize={{
                  xs: "16px",
                  sm: "28px",
                  md: "34px",
                }}
                fontWeight={"600"}
                color={"#212B36"}
              >
                Giới thiệu sản phẩm
              </Typography>
              <Divider sx={{ my: "16px" }} />
              <Typography
                fontSize={{
                  xs: "14px",
                  sm: "28px",
                  md: "25px",
                }}
              >
                Chi nhánh giới thiệu
              </Typography>
              <TextField
                select
                sx={{
                  mt: "4px",
                }}
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
                fontSize={{
                  xs: "14px",
                  sm: "28px",
                  md: "25px",
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
            <Grid display={"flex"} justifyContent={"center"} item xs={12}>
              <Box
                mt={"24px"}
                width={{
                  md: "360px",
                  lg: "420px",
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
                />
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
