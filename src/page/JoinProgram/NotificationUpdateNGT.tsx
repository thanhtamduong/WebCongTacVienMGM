import { Alert, Box, Grid, Link, Typography } from "@mui/material";
import IconI from "../../assets/images/i.svg";
import React from "react";

const NotificationUpdateNGT = () => {
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
            lg: "20px",
          }}
        >
          <Grid item xs={12}>
            <Alert
              severity="info"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "22px",
                  md: "24px",
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
            </Alert>
          </Grid>
        </Grid>
      </div>
    </Grid>
    // <Grid
    //   mt={{
    //     xs: "-48px",
    //     sm: "-85px",
    //     md: "-102px",
    //     lg: "-124px",
    //   }}
    // >
    //   <div
    //     style={{
    //       padding: "6px 16px",
    //       border: "1px solid #EAEEF2",
    //       borderRadius: "8px",
    //       boxShadow: "0px 2px 16px rgba(33, 43, 54, 0.05)",
    //       transform: "translate(10px, 10px)",
    //       background: "#E5F3FF",
    //       display: "grid",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //     <Grid container>
    //       <Grid item xs={1}>
    //         <Box
    //           component="img"
    //           src={IconI}
    //           sx={{
    //             padding: "14.83px 13.83px 0 0",
    //             width: {
    //               sm: "28px",
    //               md: "42px",
    //               lg: "48px",
    //               xl: "62px",
    //             },
    //           }}
    //         />
    //       </Grid>
    //       <Grid item xs={11}>
    //         <Typography
    //           sx={{
    //             my: "14px",
    //             fontSize: {
    //               xs: "14px",
    //               sm: "28px",
    //               md: "32px",
    //             },
    //             fontWeight: 400,
    //             letterSpacing: "0.17px",
    //             color: "#006FD6",
    //           }}
    //         >
    //           Mã NGT của bạn là 0332011609. Vui lòng đăng ký đầy đủ thông tin để
    //           nhận được hoa hồng.{" "}
    //           <Link
    //             sx={{
    //               color: "#454F5B",
    //               textDecorationColor: "#454F5B",
    //               fontWeight: 600,
    //             }}
    //             href="#"
    //           >
    //             Cập nhật thông tin
    //           </Link>
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </div>
    // </Grid>
  );
};

export default NotificationUpdateNGT;
