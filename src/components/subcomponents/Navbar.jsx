import logo from "../../assets/img/logo.jpg";
import promo from "../../assets/img/D_NQ_677380-MLA85135472747_052025-OO.webp";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-2">
      <div className="container-xl d-flex justify-content-between align-items-center">
        <Link className="logo-custom" to="/">
          <img src={logo} className="logo-img" alt="Logo" />
        </Link>

        <form
          className="d-flex flex-grow-1 mx-3"
          role="search"
          style={{ maxWidth: "450px" }}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Buscar productos, marcas y más..."
            aria-label="Buscar"
            style={{
              borderRight: "none",
              borderRadius: "0 2px 2px 0",
            }}
          />
          <span
            className="input-group-text bg-white"
            style={{
              borderLeft: "none",
              borderRadius: "0 2px 2px 0",
              cursor: "pointer",
            }}
          >
            <IoIosSearch size={20} />
          </span>
        </form>

        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="#" className="d-none d-lg-block ms-3">
          <img
            src={promo}
            alt="Promo"
            className="img-fluid"
            style={{ maxHeight: "39px", maxWidth: "340px" }}
          />
        </a>
      </div>
    </nav>
  );
}
