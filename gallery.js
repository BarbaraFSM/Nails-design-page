import React from "react";

const Gallery = () => {
  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"]; // Substitua pelas URLs reais

  return (
    <section className="gallery">
      <h2>Galeria de Trabalhos</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Trabalho ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
