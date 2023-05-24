import {
  Container,
  CssBaseline,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";

const Detail = () => {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        mb: "19px",
        mt: {
          xs: "-52px",
          sm: "-94px",
          md: "-112px",
          lg: "-136px",
        },
      }}
    >
      <CssBaseline />
      <div
        style={{
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 0px rgba(33, 43, 54, 0.05)",
          transform: "translate(10px, 10px)",
          background: "white",
        }}
      >
        <Grid container sx={{ padding: "16px" }}>
          <Grid item>
            <Typography
              sx={{
                mt: "16px",
                fontSize: {
                  xs: "16px",
                  sm: "28px",
                  md: "30px",
                  lg: "38px",
                  xl: "42px",
                },
                fontWeight: 600,
                color: "#212B36",
              }}
            >
              Thống kê chi tiết
            </Typography>
            <Typography
              sx={{
                color: "#7E8996",
                fontSize: {
                  xs: "12px",
                  sm: "18px",
                  md: "22px",
                  lg: "34px",
                  xl: "34px",
                },
                mb: "2px",
              }}
            >
              Tổng số hồ sơ đã giới thiệu:<strong> 50</strong>
            </Typography>
            <Typography
              sx={{
                color: "#7E8996",
                fontSize: {
                  xs: "12px",
                  sm: "18px",
                  md: "22px",
                  lg: "34px",
                  xl: "34px",
                },
                mb: "2px",
              }}
            >
              Thời gian thống kê từ tháng <strong>01/2023</strong> đến{" "}
              <strong>03/2023</strong>
            </Typography>
          </Grid>
        </Grid>
        {/* 1 */}
        <Grid
          container
          sx={{
            padding: "16px",
            borderWidth: "0.5px 0px",
            borderStyle: "solid",
            borderColor: "#D3D8DE",
            bgcolor: "rgba(0, 0, 0, 0.03)",
          }}
        >
          <Grid
            container
            sx={{
              // fontSize: {
              //   xs: "16px",
              //   sm: "18px",
              //   md: "32px",
              //   lg: "36px",
              //   xl: "34px",
              // },
              fontWeight: "600",
            }}
          >
            <Grid
              item
              xs={3}
              sx={{
                color: "#7E8996",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                Tên KH
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                  textAlign: "right",
                }}
              >
                Phạm Văn B
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={3} sx={{ color: "#7E8996" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                SP ĐK
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                HDBank x Petrolimex 4 in 1
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={5} sx={{ color: "#7E8996" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                SĐT khách hàng
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                +84 987 187 988
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={4} sx={{ color: "#7E8996" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                Ngày ĐK
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                12/01/2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* 2 */}
        <Grid
          container
          sx={{
            padding: "16px",
            borderWidth: "0.5px 0px",
            borderStyle: "solid",
            borderColor: "#D3D8DE",
            bgcolor: "#ffffff",
          }}
        >
          <Grid container sx={{ fontSize: "16px", fontWeight: "600" }}>
            <Grid item xs={3} sx={{ color: "#7E8996" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                Tên KH
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                Tran Thi C
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={3} sx={{ color: "#7E8996" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                SP ĐK
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                HDBank x Petrolimex 4 in 1
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={5} sx={{ color: "#7E8996" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                SĐT khách hàng
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                +84 987 187 988
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={4} sx={{ color: "#7E8996" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                Ngày ĐK
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ color: "#212B36" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                12/01/2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* 3 */}
        {/* <Grid
          container
          sx={{
            padding: "16px",
            borderWidth: "0.5px 0px",
            borderStyle: "solid",
            borderColor: "#D3D8DE",
            bgcolor: "rgba(0, 0, 0, 0.03)",
          }}
        >
          <Grid container sx={{ fontSize: "16px", fontWeight: "600" }}>
            <Grid item xs={3} sx={{ color: "#7E8996" }}>
              <Typography>Tên KH</Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>Nguyen Thai D</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={3} sx={{ color: "#7E8996" }}>
              <Typography>SP ĐK</Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>
                HDBank x Petrolimex 4 in 1
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={5} sx={{ color: "#7E8996" }}>
              <Typography>SĐT khách hàng</Typography>
            </Grid>
            <Grid item xs={7} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>
                +84 987 187 988
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={4} sx={{ color: "#7E8996" }}>
              <Typography>Ngày ĐK</Typography>
            </Grid>
            <Grid item xs={8} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>12/01/2023</Typography>
            </Grid>
          </Grid>
        </Grid> */}
        {/* 4 */}
        {/* <Grid
          container
          sx={{
            padding: "16px",
            borderWidth: "0.5px 0px",
            borderStyle: "solid",
            borderColor: "#D3D8DE",
            bgcolor: "#ffffff",
          }}
        >
          <Grid container sx={{ fontSize: "16px", fontWeight: "600" }}>
            <Grid item xs={3} sx={{ color: "#7E8996" }}>
              <Typography>Tên KH</Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>Luu Thi E</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={3} sx={{ color: "#7E8996" }}>
              <Typography>SP ĐK</Typography>
            </Grid>
            <Grid item xs={9} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>
                HDBank x Petrolimex 4 in 1
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={5} sx={{ color: "#7E8996" }}>
              <Typography>SĐT khách hàng</Typography>
            </Grid>
            <Grid item xs={7} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>
                +84 987 187 988
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ fontSize: "16px", fontWeight: "600", my: "4px" }}
          >
            <Grid item xs={4} sx={{ color: "#7E8996" }}>
              <Typography>Ngày ĐK</Typography>
            </Grid>
            <Grid item xs={8} sx={{ color: "#212B36" }}>
              <Typography sx={{ textAlign: "right" }}>12/01/2023</Typography>
            </Grid>
          </Grid>
        </Grid> */}
      </div>
      <Grid container justifyContent={"center"} m={"24px 0 14px 0"}>
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </Grid>
    </Container>
  );
};

export default Detail;
