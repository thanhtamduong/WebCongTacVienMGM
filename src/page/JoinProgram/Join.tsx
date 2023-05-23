import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
// import Verification from "./Verification";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `verification`;
    navigate(path);
  };
  return (
    <Container component="main" maxWidth="xl" sx={{ mb: "24px" }}>
      <CssBaseline />
      <Grid
        sx={{
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
          fontSize={{
            xs: "22px",
            sm: "32px",
            md: "38px",
          }}
          fontWeight={"600"}
          color={"#BE1128"}
          textAlign={"center"}
          margin={"32px 0 40px 0"}
        >
          THAM GIA CHƯƠNG TRÌNH
        </Typography>
        <form>
          <Grid justifyContent={"center"} container spacing={2}>
            <Grid item xs={12}>
              <Typography
                m={"16px 0 4px 0"}
                fontSize={{
                  xs: "14px",
                  sm: "20px",
                  md: "24px",
                }}
              >
                Số điện thoại
              </Typography>
              <TextField sx={{ mt: "4px" }} variant="outlined" fullWidth />
            </Grid>
            <Button
              onClick={routeChange}
              sx={{
                "&.MuiButtonBase-root:hover": {
                  background: "#FFD643",
                },
                padding: "16px 24px",
                color: "#212B36",
                background: "#FFD643",
                fontSize: {
                  xs: "18px",
                  sm: "24px",
                  md: "30px",
                },
                fontWeight: 700,
                textTransform: "none",
                borderRadius: "50px",
                my: "40px",
              }}
            >
              Xác nhận
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Join;
