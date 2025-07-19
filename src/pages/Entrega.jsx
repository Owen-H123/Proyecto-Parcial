import { Link } from "react-router-dom";

export const Entrega = () => {
  return (
    <div
      className="container py-5 mt-5"
      style={{
        maxWidth: "1080px",
        padding: "3rem",
        border: "1px solid rgba(0, 0, 0, 0.175)",
      }}
    >
      <h4 className="fw-bold mb-4">Elige la forma de entrega</h4>

      <div className="d-flex flex-column gap-3">
        <label className="border rounded p-3">
          <div className="d-flex justify-content-between align-items-start">
            <div className="form-check">
              <input
                className="form-check-input me-2"
                type="radio"
                name="opcionEntrega"
              />
              <span className="fw-semibold">Enviar a domicilio</span>
              <div className="ms-4 mt-2 small text-muted">
                Dirección del cliente
                <br />
                <a href="#" className="text-decoration-underline">
                  Modificar domicilio o elegir otro
                </a>
              </div>
            </div>
            <div className="fw-semibold">Gratis</div>
          </div>
        </label>

        <label className="border rounded p-3">
          <div className="d-flex justify-content-between align-items-start">
            <div className="form-check">
              <input
                className="form-check-input me-2"
                type="radio"
                name="opcionEntrega"
              />
              <span className="fw-semibold">
                Retirar en domicilio del vendedor
              </span>
              <div className="ms-4 mt-2 small text-muted">
                Lima Metropolitana
              </div>
            </div>
            <div className="fw-semibold">Gratis</div>
          </div>
        </label>

        <div className="text-end mt-3">
          <Link to={"pago"} className="btn btn-dark px-4 fw-semibold">
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
};
