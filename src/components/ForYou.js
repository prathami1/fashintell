import React from 'react';
// import { Card } from 'flowbite-react';

function ForYou(props) {
    // const myCarousel = new te.Carousel(document.getElementById("myCarousel"), options);
    return <>
    <div className="carousel carousel-end rounded-box">
    <div className="carousel-item">
      <img src={"/Users/abhaybenoy/Main-Files/Hacking/fashintell/src/images/img1.jpg"} alt="Drink" ></img>
    </div> 
    <div className="carousel-item">
      <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
    </div> 
    <div className="carousel-item">
      <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
    </div> 
  </div>
  </>
  
}

export default ForYou;