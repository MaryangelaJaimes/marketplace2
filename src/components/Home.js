import React from "react";
import Publicaciones from "./Publicaciones";
import Recomendaciones from "./Recomendaciones";
import Categorias from "./Categorias";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Importar íconos de marcas
import "../Home.css";

const Home = () => {
  return (
    <div>
      {/* Banner principal */}
      <div className="banner-container position-relative">
        <img
          src="https://www.apple.com/v/watch/bp/images/overview/black-unity/banner_unity__fo8wfqiktaa2_xlarge.jpg"
          alt="Banner MarketPlace"
          className="img-fluid w-100"
          style={{ maxHeight: "700px", objectFit: "cover" }}
        />
        <div
          className="position-absolute top-50 start-0 translate-middle-y text-white p-4"
          style={{
            zIndex: 2,
            marginLeft: "20px",
          }}
        >
          <h1 className="fw-bold">TechTrend Innovations</h1>
          <p className="lead">Encuentra los mejores productos.</p>
        </div>
      </div>

      {/* Sección de Productos Disponibles (primero) */}
      <div className="container mt-5">
        <Publicaciones />
      </div>

      {/* Sección de Categorías (segundo) */}
      <div className="container mt-5">
        <Categorias />
      </div>

      {/* Sección de Recomendaciones (tercero) */}
      <div className="container mt-5">
        <Recomendaciones />
      </div>

      {/* Footer con íconos de redes sociales */}
      <footer className="mt-5 py-4 bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="mb-0 text-white">
            © 2025 TechTrend Innovations. Todos los derechos reservados.
          </p>
          <div className="social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://github.com/MaryangelaJaimes?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
