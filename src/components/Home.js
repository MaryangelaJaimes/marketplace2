import React from "react";
import Publicaciones from "./Publicaciones";

const Home = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="text-center">
          <img
            src="https://www.apple.com/v/watch/bp/images/overview/black-unity/banner_unity__fo8wfqiktaa2_xlarge.jpg"
            alt="Banner MarketPlace"
            className="img-fluid w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 1 }}
          >
            <h1 className="text-white">Bienvenidos al MarketPlace</h1>
            <p className="lead text-white">
              Encuentra los mejores productos y servicios.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <Publicaciones />
      </div>

      {/* Footer */}
      <footer className="mt-5 py-4 bg-light">
        <div className="container text-center">
          <p className="mb-0">
            © 2023 MarketPlace. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
