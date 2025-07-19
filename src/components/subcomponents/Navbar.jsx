import logo from "../../assets/img/logo.jpg";
import promo from "../../assets/img/D_NQ_677380-MLA85135472747_052025-OO.webp";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-2">
      <div className="container-xl d-flex flex-column flex-md-row align-items-start align-items-md-center px-2">


        <div className="logo-custom w-100 text-center mb-2 d-block d-md-none">
          <Link to="/">
            <img src={logo} className="logo-img" alt="Logo" style={{ maxWidth: "130px" }} />
          </Link>
        </div>

      
        <Link className="logo-custom d-none d-md-block me-3" to="/">
          <img src={logo} className="logo-img" alt="Logo" />
        </Link>

       
        <div className="d-flex align-items-center w-100 mb-2 mb-md-0">
          <form
            className="d-flex flex-grow-1"
            role="search"
            style={{ maxWidth: "100%" }}
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
        </div>

        
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
