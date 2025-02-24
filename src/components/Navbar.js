import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { usuario } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          TechTrend
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Si el usuario está autenticado, mostramos "Perfil" */}
            {usuario ? (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/perfil">
                  Perfil
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Registrarse
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link text-white" to="/carrito">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
