import Carousel from "../components/subcomponents/carousel";
import { Link } from "react-router-dom";
import productos,{monitores} from "../data/productos";
import bannerCupones from "../assets/img/banner_descuento.webp";


export default function Home() {
  return (
    <>
      <Carousel />

   
      <section className="container-xl mt-3">
        <div className="row justify-content-center row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {productos.map((producto) => (
            <div className="col d-flex justify-content-center" key={producto.id}>
              <Link to={`/producto/${producto.id}`} className="text-decoration-none w-100" style={{ maxWidth: "230px" }}>
                <div className="card card-hover h-100 text-center p-2" style={{ fontSize: "0.9rem" }}>
                  <h6 className="fw-bold">Visto Recientemente</h6>
                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title">{producto.nombre}</h6>
                    <p className="card-text fw-bold">S/. {producto.precio}</p>
                    <span style={{ color: "#138C2B" }}>Envío gratis</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      
      <div
        style={{
          width: "100%",
          marginTop: "35px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={bannerCupones}
          alt="Cupones bancarios"
          style={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: "10px",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        />
      </div>

     
      <section className="container-xl mt-5">
        <h4 className="fw-bold mb-4 text-center text-md-start">
          OFERTAS EN MONITORES DESDE S/199 🥳🥳🤑
        </h4>
        <div className="row justify-content-center row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {monitores.map((monitor) => (
            <div className="col d-flex justify-content-center" key={monitor.id}>
              <Link to={`/producto/${monitor.id}`} className="text-decoration-none w-100" style={{ maxWidth: "230px" }}>
                <div className="card card-hover h-100 text-center p-2" style={{ fontSize: "0.9rem" }}>
                  <img
                    src={monitor.imagen}
                    className="card-img-top"
                    alt={monitor.nombre}
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title">{monitor.nombre}</h6>
                    <p className="card-text fw-bold">S/. {monitor.precio}</p>
                    <span style={{ color: "#138C2B" }}>Envío gratis</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
