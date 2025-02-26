import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { usuario, cerrarSesion, agregarPublicacion } = useContext(UserContext);
  const navigate = useNavigate();
  const [publicacion, setPublicacion] = useState("");
  const [imagen, setImagen] = useState(null);

  if (!usuario) {
    return <h2 className="text-center mt-5">No has iniciado sesión</h2>;
  }

  const handleLogout = () => {
    cerrarSesion();
    navigate("/");
  };

  const handlePublicar = (e) => {
    e.preventDefault();
    if (!publicacion.trim() && !imagen) {
      alert("Debes ingresar texto o una imagen.");
      return;
    }
    const nuevaPublicacion = {
      id: Date.now(),
      texto: publicacion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
      fecha: new Date().toLocaleString(),
    };

    agregarPublicacion(nuevaPublicacion);
    setPublicacion("");
    setImagen(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h3 className="card-title">Perfil de Usuario</h3>
              <p>
                <strong>Nombre:</strong> {usuario.nombre}
              </p>
              <p>
                <strong>Email:</strong> {usuario.email}
              </p>
              <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4>Crea una Publicación</h4>
              <form onSubmit={handlePublicar}>
                <textarea
                  className="form-control mb-2"
                  placeholder="Escribe algo..."
                  value={publicacion}
                  onChange={(e) => setPublicacion(e.target.value)}
                />
                <input
                  type="file"
                  className="form-control mb-2"
                  accept="image/*"
                  onChange={(e) => setImagen(e.target.files[0])}
                />
                <button type="submit" className="btn btn-secondary">
                  Publicar
                </button>
              </form>
            </div>
          </div>

          <h4 className="mt-4">Historial de Publicaciones</h4>
          {usuario.publicaciones?.length ? (
            usuario.publicaciones.map((pub) => (
              <div key={pub.id} className="card mt-3">
                <div className="card-body">
                  <p>{pub.texto}</p>
                  {pub.imagen && (
                    <img
                      src={pub.imagen}
                      alt="Publicación"
                      className="img-fluid"
                    />
                  )}
                  <small className="text-muted">{pub.fecha}</small>
                </div>
              </div>
            ))
          ) : (
            <p>No hay publicaciones aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
