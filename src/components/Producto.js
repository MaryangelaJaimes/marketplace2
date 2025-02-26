import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const Producto = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { agregarAlCarrito } = useContext(UserContext);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito({ ...producto, cantidad });
    alert(`Agregado con éxito: ${producto.nombre}`);
  };

  // Función para formatear el precio con punto como separador de miles y ceros al final
  const formatPrice = (price) => {
    return `$ ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  return (
    <div className="col mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top zoom"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            maxHeight: "260px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          {/* Mostrar solo el monto, más grande y oscuro, con formato personalizado */}
          <p
            className="card-text price-amount"
            style={{ fontSize: "1.5rem", color: "#333" }}
          >
            {formatPrice(producto.precio)}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              className="form-control"
              style={{ width: "80px" }}
            />
            <button
              className="btn btn-secondary"
              onClick={handleAgregarAlCarrito}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
