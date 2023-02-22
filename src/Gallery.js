import React from 'react';

function Gallery(props) {
  return (
    <div className="gallery">
      {props.images.map((image, index) => (
        <img src={image.url} alt={image.alt} key={index} />
      ))}
    </div>
  );
}

export default Gallery;
