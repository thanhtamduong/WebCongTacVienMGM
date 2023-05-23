import {
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Info = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ mb: "24px" }}>
      <CssBaseline />
      <div
        style={{
          padding: "20px",
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 16px rgba(33, 43, 54, 0.05)",
          marginTop: "-62px",
          transform: "translate(10px, 10px)",
          background: "white",
        }}
      >
        <Typography
          // fontSize={"22px"}
          sx={{
            fontSize: {
              xs: "22px",
              sm: "36px",
              md: "36px",
              lg: "38px",
              xl: "42px",
            },
            fontWeight: "600",
            color: "#BE1128",
            textAlign: "center",
            m: "40px 0 32px 0",
          }}
        >
          THÔNG TIN
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            color={"#454F5B"}
            fontSize={"14px"}
            sx={{}}
          >
            <Grid item xs={12} color={"454F5B"}>
              <Typography
                mb={"4px"}
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "22px",
                    md: "24px",
                    lg: "28px",
                    // xl: "42px",
                  },
                }}
              >
                Họ tên
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id=""
                name=""
                autoComplete=""
                value={"Nguyen Van A"}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                mb={"4px"}
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "22px",
                    md: "24px",
                    lg: "28px",
                    // xl: "42px",
                  },
                }}
              >
                Số điện thoại
              </Typography>
              <TextField
                disabled
                variant="outlined"
                fullWidth
                id=""
                name=""
                autoComplete=""
                value={"039578549"}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                mb={"4px"}
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "22px",
                    md: "24px",
                    lg: "28px",
                    // xl: "42px",
                  },
                }}
              >
                Mã số thuế (nếu có)
              </Typography>
              <TextField
                disabled
                variant="outlined"
                fullWidth
                id=""
                name=""
                autoComplete=""
                value={"0332011609"}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                mb={"4px"}
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "22px",
                    md: "24px",
                    lg: "28px",
                    // xl: "42px",
                  },
                }}
              >
                Số TK HDBank nhận hoa hồng
              </Typography>
              <TextField
                fullWidth
                disabled
                value={"00270407005697"}
              ></TextField>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Info;
