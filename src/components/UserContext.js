import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Cargar datos del usuario y carrito desde localStorage al iniciar
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const carritoGuardado = localStorage.getItem("carrito");

    if (usuarioGuardado) setUsuario(JSON.parse(usuarioGuardado));
    if (carritoGuardado) setCarrito(JSON.parse(carritoGuardado));

    setCargando(false);
  }, []);

  // Guardar usuario en el estado y localStorage
  const guardarUsuario = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
  };

  // Registrar usuario
  const registrar = async (nombre, email, password) => {
    try {
      const response = await fetch(
        "https://marketplace-backend-64yl.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombre, email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error en el registro");
      }

      const data = await response.json();
      guardarUsuario({ ...data.usuario, publicaciones: [] });
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error en registrar:", error);
      alert(error.message); // Mostrar mensaje de error al usuario
    }
  };

  // Iniciar sesión
  const iniciarSesion = async (email, password) => {
    try {
      const response = await fetch(
        "https://marketplace-backend-64yl.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error en la autenticación");
      }

      const data = await response.json();
      guardarUsuario({
        ...data.usuario,
        publicaciones: data.usuario.publicaciones || [],
      });
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error en iniciar sesión:", error);
      alert("Correo o contraseña incorrectos"); // Mostrar mensaje de error al usuario
    }
  };

  // Cerrar sesión
  const cerrarSesion = () => {
    setUsuario(null);
    setCarrito([]);
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    localStorage.removeItem("carrito");
  };

  // Agregar publicación
  const agregarPublicacion = (publicacion) => {
    if (!usuario) return;

    const nuevasPublicaciones = [...(usuario.publicaciones || []), publicacion];
    const usuarioActualizado = {
      ...usuario,
      publicaciones: nuevasPublicaciones,
    };

    guardarUsuario(usuarioActualizado);
  };

  // Funciones del carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      let nuevoCarrito;
      if (existe) {
        nuevoCarrito = prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        );
      } else {
        nuevoCarrito = [...prevCarrito, producto];
      }
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito.filter((producto) => producto.id !== id);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const disminuirCantidad = (id) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito
        .map((producto) =>
          producto.id === id && producto.cantidad > 1
            ? { ...producto, cantidad: producto.cantidad - 1 }
            : producto
        )
        .filter((producto) => producto.cantidad > 0);

      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  return (
    <UserContext.Provider
      value={{
        usuario,
        cargando,
        registrar,
        iniciarSesion,
        cerrarSesion,
        carrito,
        agregarAlCarrito,
        eliminarProducto,
        disminuirCantidad,
        agregarPublicacion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
