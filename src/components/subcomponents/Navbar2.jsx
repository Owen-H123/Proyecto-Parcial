import { CiLocationOn } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-2">
      <div className="container-xl d-flex justify-content-between align-items-center">
        <div className="d-none d-lg-flex align-items-start gap-1">
          <CiLocationOn size={25} className="mt-1" />
          <div className="d-flex flex-column lh-sm">
            <span
              style={{
                fontSize: "12px",
                lineHeight: "12px",
                color: "rgba(0,0,0,.55)",
              }}
            >
              Enviar a
            </span>
            <span style={{ lineHeight: "14px" }}>Lima Metropolitana</span>
          </div>
        </div>

        <div
          className="collapse navbar-collapse flex-grow-1 justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Tecnología
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Electrodomésticos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hogar y muebles
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cupones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tiendas oficiales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vender
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-3">
          <Link className="nav-link" to="/cuenta">
            Crea tu cuenta
          </Link>
          <Link className="nav-link" to="/ingreso">
            Ingresa
          </Link>
          <Link className="nav-link" to="/compras">
            Mis compras
          </Link>
          <Link className="nav-link" to="/promo">
            <BsCart2 size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
