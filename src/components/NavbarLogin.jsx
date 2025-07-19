import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

export default function NavbarLogin() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-3">
      <div className="container-xl d-flex justify-content-between align-items-center">
        <Link className=" logo-custom" to="/">
          <img src={logo} className="logo-img" alt="Logo" />
        </Link>
      </div>
    </nav>
  );
}
