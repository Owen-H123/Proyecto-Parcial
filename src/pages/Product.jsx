import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import productos,{monitores} from "../data/productos";
import slide from "../assets/img/purchase-slide.jpg";

export const Product = () => {
  const { id } = useParams();
  const producto =
    productos.find((p) => p.id === id) ||
    monitores.find((m) => m.id.toString() === id);


  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }
  return (
    <>
      <div className="banner-container">
        <img
          src={slide}
          alt=""
          className="banner-img"
          style={{ minHeight: "200px" }}
        />
      </div>
      <div
        className="mx-auto main-superpuesto"
        style={{
          maxWidth: "1280px",
          padding: "3rem",
          border: "1px solid rgba(0, 0, 0, 0.175)",
        }}
      >
        <div className="row">
          <div className="col-12 col-lg-8 p-3">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid mb-3"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
          <div className="col-12 col-lg-4 purchase-section p-3 ">
            <div className=" p-2 ">
              <h2 className="mb-4">{producto.nombre}</h2>

              <p>{producto.descripcion}</p>
              <p className="fw-bold mb-4">Precio: S/. {producto.precio}</p>
              <div className="d-flex  flex-column align-items-center gap-2 ">
                <Link
                  to={`/producto/${producto.id}/entrega`}
                  className="btn btn-purchase btn-dark"
                >
                  Comprar ahora
                </Link>
                <button className="btn btn-purchase btn-dark">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
