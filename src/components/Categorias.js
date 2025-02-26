import React from "react";

const Categorias = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Categorías</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {[
          {
            nombre: "Series 10",
            imagen:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s10-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168059157",
          },
          {
            nombre: "AirPods Max",
            imagen:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_CL?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1725113868920",
          },
          {
            nombre: "Max Max",
            imagen:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168056018",
          },
        ].map((categoria, index) => (
          <div key={index} className="col">
            <div className="card shadow-sm">
              <img
                src={categoria.imagen}
                alt={categoria.nombre}
                className="card-img-top zoom"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{categoria.nombre}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
