import React from 'react';

import fit1 from '../img/fit1.jpg';
import fit2 from '../img/fit2.jpg';
import fit3 from '../img/fit3.jpg';

function Carousel(props) {
    return (
        <>          
            <div className="carousel carousel-center rounded-box object-contain">
                <div className="carousel-item object-contain w-full">
                    <img className="object-contain" src={fit1} alt="Pizza" />
                </div> 
                <div className="carousel-item object-contain w-full">
                    <img className="object-contain" src={fit2} alt="Pizza" />
                </div> 
                <div className="carousel-item object-contain w-full" >
                    <img className="object-contain" src={fit3} alt="Pizza" />
                </div> 
                {/* <div className="carousel-item">
                    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
                </div> 
                <div className="carousel-item">
                    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
                </div> 
                <div className="carousel-item">
                    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
                </div> */}
            </div>
        </>
    );
}

export default Carousel;