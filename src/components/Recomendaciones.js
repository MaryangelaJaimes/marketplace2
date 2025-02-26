import React from "react";

const Recomendaciones = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Recomendaciones</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {[
          {
            id: 1,
            nombre: "Galaxy S25",
            descripcion: "",
            imagen:
              "https://images.samsung.com/is/image/samsung/p6pim/cl/2501/gallery/cl-galaxy-s25-s936-sm-s936bdbkltl-544666703?imbypass=true",
          },
          {
            id: 2,
            nombre: "iPhone 16 Pro",
            descripcion: "",
            imagen:
              "https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2469868/attachments/large/iPhone_16_Pro_Max_Black_Titanium_1.jpg?1726158072",
          },
          {
            id: 3,
            nombre: "Apple Watch Ultra 2",
            descripcion: "",
            imagen:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s10-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168059157",
          },
        ].map((item) => (
          <div key={item.id} className="col">
            <div className="card shadow-sm h-100">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="card-img-top zoom"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: "260px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomendaciones;
