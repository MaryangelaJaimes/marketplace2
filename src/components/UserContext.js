import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    nombre: "Usuario de Prueba",
    carrito: [],
  });

  const agregarAlCarrito = (producto) => {
    setUser((prevUser) => {
      const productoExistente = prevUser.carrito.find(
        (p) => p.id === producto.id
      );
      if (productoExistente) {
        return {
          ...prevUser,
          carrito: prevUser.carrito.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          ),
        };
      } else {
        return {
          ...prevUser,
          carrito: [...prevUser.carrito, { ...producto, cantidad: 1 }],
        };
      }
    });
  };

  const eliminarProducto = (productoId) => {
    setUser((prevUser) => ({
      ...prevUser,
      carrito: prevUser.carrito.filter((p) => p.id !== productoId),
    }));
  };

  const disminuirCantidad = (productoId) => {
    setUser((prevUser) => ({
      ...prevUser,
      carrito: prevUser.carrito.map((p) =>
        p.id === productoId ? { ...p, cantidad: p.cantidad - 1 } : p
      ),
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        agregarAlCarrito,
        eliminarProducto,
        disminuirCantidad,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
