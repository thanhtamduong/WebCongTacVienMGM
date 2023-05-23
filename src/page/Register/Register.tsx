import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import Banner from "../../components/Banner";
// import ConfirmInfo from "./ConfirmInfo";

const Register = () => {
  return (
    <>
      {/* <Banner /> */}
      <Container component="main" maxWidth="xs" sx={{ mb: "24px" }}>
        <CssBaseline />
        <div
          style={{
            padding: "20px",
            border: "1px solid #EAEEF2",
            borderRadius: "8px",
            boxShadow: "0px 2px 16px",
            marginTop: "-62px",
            transform: "translate(10px, 10px)",
            background: "white",
            // width: "343px",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#BE1128",
              textAlign: "center",
              margin: "32px 0 32px 0",
            }}
          >
            ĐĂNG KÝ THAM GIA
          </Typography>
          <form>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={12}>
                <Typography m={"16px 0 4px 0"}>Họ tên</Typography>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id=""
                  label=""
                  name=""
                  autoComplete=""
                />
              </Grid>
              <Grid item xs={12}>
                <Typography m={"16px 0 4px 0"}>Mã số thế</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  id=""
                  label="Nhập mã số thế"
                  name=""
                  autoComplete=""
                  sx={{ marginBottom: "4px" }}
                />
                <Link href="#">Tra cứu MST</Link>
              </Grid>
              <Grid item xs={12}>
                <Typography m={"16px 0 4px 0"}>
                  Số TK HDBank nhận hoa hồng
                </Typography>
                <TextField
                  select
                  variant="outlined"
                  fullWidth
                  id=""
                  label="--"
                  name=""
                  autoComplete=""
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#454F5B",
                    my: "32px",
                  }}
                >
                  Bằng việc nhấn nút đăng ký bạn đã đồng ý các{" "}
                  <Link href="#">Điều khoản & Điều kiện</Link> tham gia chương
                  trình người giới thiệu của HDBank.{" "}
                </Typography>
              </Grid>
              <Button
                sx={{
                  color: "#212B36",
                  background: "#FFD643",
                  fontSize: "18px",
                  fontWeight: 700,
                  textTransform: "none",
                  width: "140px",
                  height: "58px",
                  borderRadius: "50px",
                  mb: "32px",
                }}
              >
                Đăng ký
              </Button>
            </Grid>
          </form>
        </div>
      </Container>
      {/* <ConfirmInfo /> */}
    </>
  );
};

export default Register;
