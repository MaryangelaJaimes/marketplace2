import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Producto from "./Producto";

const Publicaciones = () => {
  const { agregarAlCarrito } = useContext(UserContext);

  const [productos] = React.useState([
    {
      id: 1,
      nombre: "Series 10",
      descripcion: "Descripción del Producto 1",
      precio: 599.99,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s10-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168059157",
    },
    {
      id: 2,
      nombre: "AirPods Max",
      descripcion: "Descripción del Producto 2",
      precio: 345.99,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_CL?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1725113868920",
    },
    {
      id: 3,
      nombre: "Max Max",
      descripcion: "Descripción del Producto 2",
      precio: 699.999,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168056018",
    },
    {
      id: 4,
      nombre: "ProPRO",
      descripcion: "Descripción del Producto 1",
      precio: 599.99,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s10-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168059157",
    },
    {
      id: 5,
      nombre: "UltraK",
      descripcion: "Descripción del Producto 2",
      precio: 345.99,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_CL?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1725113868920",
    },
    {
      id: 6,
      nombre: "Force",
      descripcion: "Descripción del Producto 2",
      precio: 699.999,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168056018",
    },
  ]);

  return (
    <div className="container mt-4 ">
      <h2>Productos Disponibles</h2>
      <div className="row">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
};

export default Publicaciones;
