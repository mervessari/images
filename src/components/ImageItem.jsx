import React from "react";

function ImageItem({image}) {
  return(
    <div>
        <img className="imageListImg" src={image.urls.small} alt="" /> {/* gelen datanın içinden yani image, urls bölümünden small olan fotoğraf url ini srcmize koyuyoruz ki fotoğraflar gelsin */}
    </div>
  )
}

export default ImageItem;
