import React from "react";
import Publicaciones from "./Publicaciones";

const Home = () => {
  return (
    <div>
      {/* Banner principal */}
      <div className="container-fluid p-0 position-relative">
        <img
          src="https://www.apple.com/v/watch/bp/images/overview/black-unity/banner_unity__fo8wfqiktaa2_xlarge.jpg"
          alt="Banner MarketPlace"
          className="img-fluid w-100"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        {/* Contenedor de texto alineado a la izquierda */}
        <div
          className="position-absolute top-50 start-0 translate-middle-y p-4"
          style={{
            zIndex: 2,
            background: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semitransparente para mejorar visibilidad
            borderRadius: "10px",
            maxWidth: "40%",
            marginLeft: "20px", // Espaciado para que no quede pegado al borde
          }}
        >
          <h1 className="text-white fw-bold">TechTrend Innovations</h1>
          <p className="lead text-white">
            Encuentra los mejores productos y servicios.
          </p>
        </div>
      </div>

      {/* Sección de publicaciones */}
      <div className="container mt-4">
        <Publicaciones />
      </div>

      {/* Footer */}
      <footer className="mt-5 py-4 bg-light">
        <div className="container text-center">
          <p className="mb-0">
            © 2025 TechTrend Innovations. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
