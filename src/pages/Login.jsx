import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { FcGoogle } from "react-icons/fc";
import { BsShieldExclamation } from "react-icons/bs";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Inicializa el hook
  // Autocompletar desde sessionStorage al cargar el componente
  useEffect(() => {
    const emailGuardado = sessionStorage.getItem("userEmail") || "";
    const passwordGuardado = sessionStorage.getItem("userPassword") || "";
    setEmail(emailGuardado);
    setPassword(passwordGuardado);
  }, []);

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes validar el login si lo deseas
    navigate("/"); // Redirige a Home
  };

  // Nuevo manejador para el botón "Crear cuenta"
  const handleCrearCuenta = () => {
    navigate("/cuenta");
  };

  return (
    <section className="mx-auto" style={{ maxWidth: "960px", padding: "2rem" }}>
      <div className="row mt-4">
        <div className="col-12 col-md-6 d-flex align-items-start flex-column">
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
            Ingresa tu e-mail o teléfono para iniciar sesión
          </h1>
          <button className="btn btn-custom4 mt-auto d-flex align-items-center justify-content-between border rounded px-3 py-1 gap-2">
            <span
              className="d-flex align-items-center gap-2"
              style={{ fontSize: "13px" }}
            >
              <BsShieldExclamation size={20} />
              Tengo un problema de seguridad
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>›</span>
          </button>
        </div>
        <div className="col-12 col-md-6 ">
          <form
            className="d-flex flex-column justify-content-center"
            style={{
              padding: "2rem",
              rowGap: "10px",
              border: "1px solid rgba(0,0,0,.1)",
            }}
            onSubmit={handleSubmit} // Asocia el submit  
          >
            <div className="mb-4">
              <label for="exampleInputEmail1" className="form-label">
                Email o teléfono
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-custom">
              Continuar
            </button>
            <button type="button" className="btn btn-custom2" onClick={handleCrearCuenta}>
              Crear cuenta
            </button>
            <button
              type="submit"
              className="btn btn-custom3  d-flex align-items-center position-relative mt-5"
              style={{ justifyContent: "center" }}
            >
              <span className="position-absolute start-0 ms-3">
                <FcGoogle size={22} />
              </span>
              <span>Iniciar sesión con Google</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
