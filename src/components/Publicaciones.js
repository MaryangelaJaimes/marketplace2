import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Producto from "./Producto";

const Publicaciones = () => {
  const { agregarAlCarrito } = useContext(UserContext);

  const [productos] = React.useState([
    {
      id: 1,
      nombre: "Xiaomi 14T Pro azul",
      descripcion:
        "Un azul plateado reluciente que irradia un brillo cautivador. ",
      precio: 799.999,
      imagen:
        "https://i02.appmifile.com/232_item_cl/14/02/2025/c087e8461f9c865f714e24a8cb4d9313!600x600!85.png",
    },
    {
      id: 2,
      nombre: "Apple Watch Ultra 2",
      descripcion: "El compañero perfecto para el deporte y la aventura.",
      precio: 949.999,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_CL?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1725113868920",
    },
    {
      id: 3,
      nombre: "Galaxy S24 Ultra",
      descripcion:
        "Con un escudo duradero de titanio integrado en el marco y una mejor resistencia a los rayones.",
      precio: 699.999,
      imagen:
        "https://images.samsung.com/is/image/samsung/p6pim/cl/2401/gallery/cl-galaxy-s24-s928-sm-s928bztkltl-539308363?imbypass=true",
    },

    {
      id: 5,
      nombre: "MacBook Pro",
      descripcion:
        "Apple Intelligence es un sistema de inteligencia personal que te ayuda a escribir, expresarte y hacer de todo con mucha facilidad.",
      precio: 2200.0,
      imagen:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-gallery1-202410?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1729266976923",
    },
    {
      id: 4,
      nombre: "Redmi Watch 5 Lite",
      descripcion: "Diseño elegante y liviano con marco medio de alto brillo.",
      precio: 59.999,
      imagen:
        "https://i02.appmifile.com/285_item_cl/13/02/2025/eeb2dfce174da964ef542866e007863d!600x600!85.png",
    },

    {
      id: 6,
      nombre: "98'' QLED 4K Q80C Smart TV",
      descripcion:
        "Reducción de ruido, definición de imagen, mejora de negros optimizados con IA para una calidad de imagen superior en tu Super Gran Pantalla",
      precio: 1350.0,
      imagen:
        "https://images.samsung.com/is/image/samsung/p6pim/cl/qn98q80cagxzs/gallery/cl-qled-98q80c-qn98q80cagxzs-537818447?$592_472_PNG$",
    },
  ]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Productos Disponibles</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
