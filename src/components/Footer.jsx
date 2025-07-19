
export default function Footer() {
  
  return (
    <footer className="w-100 border-top mt-5 pt-5" style={{ backgroundColor: "#f8f9fa", fontSize: "13px" }}>
     
      <div className="container mb-4">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <i className="bi bi-credit-card mb-2" style={{ fontSize: "2rem", color: "#3483fa" }}></i>
            <h6 className="fw-bold">Paga con Mercado Pago</h6>
            <p className="text-muted small text-center text-md-start px-2">
              Usa Mercado Pago, la solución de Mercado Libre para pagar de forma segura y con el medio de pago que prefieras.
            </p>
            
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <i className="bi bi-truck mb-2" style={{ fontSize: "2rem", color: "#3483fa" }}></i>
            <h6 className="fw-bold">Envío gratis desde S/ 100so</h6>
            <p className="text-muted small text-center text-md-start px-2">
              Compra con envíos de Mercado Libre y disfruta de envíos gratis en miles de productos.
            </p>
           
          </div>

          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <i className="bi bi-shield-lock mb-2" style={{ fontSize: "2rem", color: "#3483fa" }}></i>
            <h6 className="fw-bold">Seguridad, de principio a fin</h6>
            <p className="text-muted small text-center text-md-start px-2">
              ¿No te gusta? ¡Devuélvelo! En Mercado Libre, estás siempre protegido.
            </p>
            
          </div>
        </div>
      </div>

      
      <div className="border-top pt-3 px-4 pb-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-muted">
        <div>
          <a href="#" style={{ color: "#3483fa" }}>
            Cómo cuidamos tu privacidad
          </a>{" "}
          - Copyright © 1999–2025 MercadoLibre Perú S.R.L.
        </div>
        <div className="text-md-end">
          Protegido por reCAPTCHA -{" "}
          <a href="#" style={{ color: "#3483fa" }}>
            Privacidad
          </a>{" "}
          -{" "}
          <a href="#" style={{ color: "#3483fa" }}>
            Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
}
