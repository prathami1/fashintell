import React from 'react';

import fit2 from '../img/fit2.jpg';
import fit3 from '../img/fit3.jpg';
// let fits = require("/Users/abhaybenoy/Main-Files/Hacking/fashintell/src/fashImages2.json")
// let ids = require("/Users/abhaybenoy/Main-Files/Hacking/fashintell/src/fashImages.json")
// console.log(ids["00000867-01"])
// let list = ["00000867-01", "00002760-01", "00007607-01", "00000084-04"]
// let arr = ids[list[2]]
// console.log(fits[55])

function Carousel(props) {
    let messages = ["How is this vibe?", "Does this suit your style?", "Is this your kind of thing?", "Does this resonate with you?","Is this up your alley?","Does this jive with your tastes?","Is this in line with your preferences?","Does this match your personality?","Is this your cup of tea?","Does this fit your mood?","Is this your scene?"]
    let list = ["00000867-01", "00002760-01", "00000226-04", "00000084-04", "00000084-05", "00000084-07", "00000084-08", "00000094-01"]
    let arr = ids[list[props.num]]
    return (
        <div>          
            <div className="carousel carousel-center rounded-box object-contain">
                {arr.map((link) => ( link && 
                <div className="carousel-item object-contain w-full" key={link}>
                    <img className="object-contain" src={link} alt="Pizza" />
                </div> 
                ))}
                {/* <div className="carousel-item object-contain w-full">
                    <img className="object-contain" src={fit2} alt="Pizza" />
                </div> 
                <div className="carousel-item object-contain w-full" >
                    <img className="object-contain" src={fit3} alt="Pizza" />
                </div>  */}
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
        </div>
    );
}

export default Carousel;