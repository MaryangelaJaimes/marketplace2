import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Carrito = () => {
  const { user, eliminarProducto, disminuirCantidad } = useContext(UserContext);
  const carrito = user ? user.carrito : [];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="row">
          {carrito.map((producto) => (
            <div key={producto.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text">
                    <strong>Precio:</strong> ${producto.precio.toFixed(2)}
                  </p>
                  <p className="card-text">
                    <strong>Cantidad:</strong> {producto.cantidad}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => disminuirCantidad(producto.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrito;
