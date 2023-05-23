import {
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Info from "../../assets/images/Info.svg";
import IconSuccess from "../../assets/images/Sucess.svg";

const ConfirmInfo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container component="main" maxWidth="md" sx={{ mb: "39px" }}>
      <CssBaseline />
      <div
        style={{
          border: "1px solid #EAEEF2",
          borderRadius: "8px",
          boxShadow: "0px 2px 16px",
          marginTop: "-62px",
          transform: "translate(10px, 10px)",
          background: "white",
        }}
      >
        <form>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item>
              <DialogContent>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "62.36px",
                  }}
                >
                  <img src={Info} />
                </Grid>
                <Grid item sx={{ textAlign: "center" }}>
                  <DialogTitle
                    sx={{
                      mt: "46.36px",
                      mb: "8px",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#333333",
                    }}
                  >
                    Xác nhận thông tin
                  </DialogTitle>
                  <Typography>
                    Thông tin MST: 039578549 bạn nhập là chính xác
                  </Typography>
                </Grid>
              </DialogContent>
            </Grid>
            <Button
              onClick={handleClickOpen}
              sx={{
                color: "#212B36",
                background: "#FFD643",
                fontSize: "18px",
                fontWeight: 700,
                textTransform: "none",
                width: "305px",
                height: "58px",
                borderRadius: "50px",
                mb: "40px",
                mt: "32px",
              }}
            >
              Xác nhận & Tiếp tục giới thiệu
            </Button>
          </Grid>
        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent
            sx={{
              width: {
                xs: "294px",
                sm: "336px",
                md: "436px",
              },
            }}
          >
            <Grid item sx={{ display: "flex", justifyContent: "center" }}>
              <img src={IconSuccess} alt="iconSuccess" />
            </Grid>
            <Grid item>
              <DialogTitle
                textAlign={"center"}
                sx={{ fontSize: "20px", fontWeight: 700, color: "#212B36" }}
              >
                Đăng ký thành công
              </DialogTitle>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
};

export default ConfirmInfo;
