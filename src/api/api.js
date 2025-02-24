import axios from "axios";

const API_URL = "https://marketplace-backend-64yl.onrender.com";

// Crear publicaciones
export const addPublicaciones = async () => {
  try {
    const response = await axios.post(`${API_URL}/publicaciones`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Obtener publicaciones
export const getPublicaciones = async () => {
  try {
    const response = await axios.get(`${API_URL}/publicaciones`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Registrar un usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Obtener comentarios de una publicación
export const getComentarios = async (publicacionId) => {
  try {
    const response = await axios.get(`${API_URL}/comentarios/${publicacionId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Agregar un comentario
export const createComentario = async (comentarioData) => {
  try {
    const response = await axios.post(`${API_URL}/comentarios`, comentarioData);
    return response.data; // Debe devolver el comentario creado
  } catch (error) {
    throw error.response.data;
  }
};

// Obtener favoritos de un usuario
export const getFavoritos = async (usuarioId) => {
  try {
    const response = await axios.get(`${API_URL}/favoritos/${usuarioId}`);
    return response.data; // Debe ser un array de favoritos
  } catch (error) {
    throw error.response.data;
  }
};

// Agregar un favorito
export const addFavorito = async (favoritoData) => {
  try {
    const response = await axios.post(`${API_URL}/favoritos`, favoritoData);
    return response.data; // Debe devolver el favorito creado
  } catch (error) {
    throw error.response.data;
  }
};
