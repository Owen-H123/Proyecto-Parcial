import { Outlet } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";

export const AuthLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLogin />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
