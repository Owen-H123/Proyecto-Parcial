import React, { useState, useRef, useEffect } from 'react';
import { Mail, User, Phone, Lock, Check } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export const CrearCuenta = () => {
    const navigate = useNavigate();
    // Refs para los inputs
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);


    const [completedSteps, setCompletedSteps] = useState({
        email: false,
        name: false,
        phone: false,
        password: false,
    })

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        password: "",
    })

    // Nuevo estado para saber el último paso completado
    const [lastStep, setLastStep] = useState(null);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const handleValidateEmail = () => {
        if (formData.email) {
            setCompletedSteps({ ...completedSteps, email: true })
        }
    }

    const handleStepComplete = (step) => {
        if (formData[step]) {
            setCompletedSteps({ ...completedSteps, [step]: true })
            setLastStep(step); // Guardamos el último paso completado
        }
    }

    // Esta función manejará el submit del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        sessionStorage.setItem("userEmail", formData.email);
        sessionStorage.setItem("userPassword", formData.password);

        await Swal.fire({
            title: "Cuenta creada exitosamente",
            text: "¡Ya puedes iniciar sesión!",
            icon: "success",
            confirmButtonText: "Aceptar"
        });

        navigate("/ingreso");
    };
    const handleInputKeyDown = (e, step) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleStepComplete(step);
        }
    };

    // Efecto para enfocar el siguiente input cuando cambia el paso
    useEffect(() => {
        if (lastStep === "email" && nameRef.current) nameRef.current.focus();
        if (lastStep === "name" && phoneRef.current) phoneRef.current.focus();
        if (lastStep === "phone" && passwordRef.current) passwordRef.current.focus();
    }, [completedSteps, lastStep]);


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
                    <div
                        className="card shadow-lg"
                        style={{ maxWidth: "500px", width: "100%" }}
                    >
                        <div className="card-body p-4 p-md-5">
                            <h2 className="text-center mb-4 fw-bold text-dark">
                                Completa los datos para crear tu cuenta
                            </h2>

                            {/* Email Step */}
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${completedSteps.email ? "bg-success" : "bg-primary"}`}
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        {completedSteps.email ? (
                                            <Check size={24} className="text-white" />
                                        ) : (
                                            <Mail size={24} className="text-white" />
                                        )}
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 text-primary fw-semibold">
                                            Valida tu e-mail
                                        </h5>
                                        <p className="mb-0 text-muted small">
                                            Recibirás información de tu cuenta.
                                        </p>
                                    </div>
                                    {/* El botón Validar ha sido eliminado */}
                                </div>
                                {!completedSteps.email && (
                                    <div className="ms-5 ps-2">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Ingresa tu email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            onBlur={() => handleStepComplete("email")}
                                            onKeyDown={(e) => handleInputKeyDown(e, "email")}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Name Step */}
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${completedSteps.name
                                            ? "bg-success"
                                            : completedSteps.email
                                                ? "bg-primary"
                                                : "bg-secondary"
                                            }`}
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        {completedSteps.name ? (
                                            <Check size={24} className="text-white" />
                                        ) : (
                                            <User size={24} className="text-white" />
                                        )}
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 text-primary fw-semibold">
                                            Elige tu nombre
                                        </h5>
                                        <p className="mb-0 text-muted small">
                                            Elige cómo quieres que te llamemos.
                                        </p>
                                    </div>
                                </div>
                                {completedSteps.email && !completedSteps.name && (
                                    <div className="ms-5 ps-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ingresa tu nombre"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            onBlur={() => handleStepComplete("name")}
                                            onKeyDown={(e) => handleInputKeyDown(e, "name")}
                                            ref={nameRef}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Phone Step */}
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${completedSteps.phone
                                            ? "bg-success"
                                            : completedSteps.email && completedSteps.name
                                                ? "bg-primary"
                                                : "bg-secondary"
                                            }`}
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        {completedSteps.phone ? (
                                            <Check size={24} className="text-white" />
                                        ) : (
                                            <Phone size={24} className="text-white" />
                                        )}
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 text-primary fw-semibold">
                                            Valida tu Celular
                                        </h5>
                                        <p className="mb-0 text-muted small">
                                            Podrás usarlo para ingresar a tu cuenta.
                                        </p>
                                    </div>
                                </div>
                                {completedSteps.email &&
                                    completedSteps.name &&
                                    !completedSteps.phone && (
                                        <div className="ms-5 ps-2">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Ingresa tu teléfono"
                                                value={formData.phone}
                                                maxLength={9}
                                                onChange={(e) => {
                                                    // Solo números y máximo 9 dígitos
                                                    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                                                    handleInputChange("phone", value);
                                                }}
                                                onBlur={() => {
                                                    // Solo marca como completo si hay 9 dígitos
                                                    if (formData.phone.length === 9) handleStepComplete("phone");
                                                }}
                                                onKeyDown={(e) => handleInputKeyDown(e, "phone")}
                                                ref={phoneRef}
                                            />
                                        </div>
                                    )}
                            </div>

                            {/* Password Step */}
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${completedSteps.password
                                            ? "bg-success"
                                            : completedSteps.email &&
                                                completedSteps.name &&
                                                completedSteps.phone
                                                ? "bg-primary"
                                                : "bg-secondary"
                                            }`}
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        {completedSteps.password ? (
                                            <Check size={24} className="text-white" />
                                        ) : (
                                            <Lock size={24} className="text-white" />
                                        )}
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 text-primary fw-semibold">
                                            Crea tu contraseña
                                        </h5>
                                        <p className="mb-0 text-muted small">
                                            Mantendrás tu cuenta protegida.
                                        </p>
                                    </div>
                                </div>
                                {completedSteps.email &&
                                    completedSteps.name &&
                                    completedSteps.phone &&
                                    !completedSteps.password && (
                                        <div className="ms-5 ps-2">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Crea tu contraseña"
                                                value={formData.password}
                                                onChange={(e) => handleInputChange("password", e.target.value)}
                                                onBlur={() => handleStepComplete("password")}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        e.preventDefault();
                                                        handleStepComplete("password");
                                                    }
                                                }}
                                                ref={passwordRef}
                                            />
                                        </div>
                                    )}
                            </div>

                            {/* Complete Button */}
                            {Object.values(completedSteps).every((step) => step) && (
                                <div className="text-center mt-4">
                                    <button className="btn btn-success btn-lg px-5" type="submit">
                                        Crear Cuenta
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
