import React from "react";
import ImageItem from "./ImageItem";

function ImageList({imagePlaceholders}) {
  return (
    <div className="imageList">
      {imagePlaceholders.map((image, index) => { //map fonksiyonu ile imagePlaceholders içerisindeki her bir elemanı tek tek dolaşıp(ve bunların her birinin farklı eleman olduğunu belirtmek için index olarak key verdik) ImageItem componentine gönderiyoruz. 
        return <ImageItem key={index} image ={image}/> 
      })}
    </div>

  )
}

export default ImageList;
