import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComentarios } from "../api/api";

const Comentarios = () => {
  const { publicacion_id } = useParams();
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const data = await getComentarios(publicacion_id);
        setComentarios(data);
      } catch (error) {
        setError("Error al cargar los comentarios.");
      } finally {
        setLoading(false);
      }
    };

    fetchComentarios();
  }, [publicacion_id]);

  if (loading) return <p>Cargando comentarios...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Comentarios</h2>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
            <p>{comentario.contenido}</p>
            <small>Publicado el: {comentario.fecha}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios;
