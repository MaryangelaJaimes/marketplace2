import React, { useState } from "react";

const Producto = ({ producto, agregarAlCarrito }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito({ ...producto, cantidad });
    alert(`Agregado con exito: ${producto.nombre} `);
  };

  return (
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
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <input
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value))}
                className="form-control"
                style={{ width: "80px" }}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={handleAgregarAlCarrito}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
