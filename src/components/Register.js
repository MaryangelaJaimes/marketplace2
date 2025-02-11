import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Registrarse</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="......"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="avatar" className="form-label">
                    Avatar URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="avatar"
                    placeholder="https://ejemplo.com/avatar.jpg"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Registrarme
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <Link to="/login" className="btn btn-link">
                  ¿Ya tienes una cuenta? Inicia sesión aquí
                </Link>
              </div>
              <div className="text-center mt-2">
                <Link to="/" className="btn btn-link">
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
