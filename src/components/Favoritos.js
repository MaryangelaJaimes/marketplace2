import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFavoritos } from "../api/api";

const Favoritos = () => {
  const { usuario_id } = useParams();
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFavoritos = async () => {
      try {
        const data = await getFavoritos(usuario_id);
        setFavoritos(data);
      } catch (error) {
        setError("Error al cargar los favoritos.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavoritos();
  }, [usuario_id]);

  if (loading) return <p>Cargando favoritos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favoritos.map((favorito) => (
          <li key={favorito.id}>
            <p>Publicación ID: {favorito.publicacion_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;
