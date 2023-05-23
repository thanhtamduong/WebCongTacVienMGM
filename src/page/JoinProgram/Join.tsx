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
          sx={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#BE1128",
            textAlign: "center",
            margin: "32px 0 40px 0",
          }}
        >
          THAM GIA CHƯƠNG TRÌNH
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
              <Typography>Số điện thoại</Typography>
              <TextField
                sx={{ mt: "4px" }}
                variant="outlined"
                required
                fullWidth
                id=""
                label=""
                name=""
                autoComplete=""
              />
            </Grid>
            <Button
              onClick={routeChange}
              sx={{
                color: "#212B36",
                background: "#FFD643",
                fontSize: "18px",
                fontWeight: 700,
                textTransform: "none",
                width: "140px",
                height: "58px",
                borderRadius: "50px",
                m: "40px 0 40px 0",
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
