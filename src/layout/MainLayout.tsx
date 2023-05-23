import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="" style={{ height: "100%" }}>
      <Header />
      <div
        style={{
          minHeight: "max-content",
          marginLeft: "-20px",
          padding: " 0 10px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
