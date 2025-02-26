import React from "react";

const Categorias = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Categorías</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {[
          {
            nombre: "Hogar Inteligente",
            imagen:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=940&hei=1112&fmt=png-alpha&.v=1670557210097",
          },
          {
            nombre: "Dispositivos Portatiles",
            imagen:
              "https://i02.appmifile.com/507_item_cl/14/02/2025/a2966d83e7443869fe9a79d7166bf32e!600x600!85.png",
          },
          {
            nombre: "Monitores",
            imagen:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-gallery1-201909?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1574201024213",
          },
        ].map((categoria, index) => (
          <div key={index} className="col">
            <div className="card shadow-sm">
              <img
                src={categoria.imagen}
                alt={categoria.nombre}
                className="card-img-top zoom"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
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
