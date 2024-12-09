"use client";

import React, { useEffect } from 'react';

export default function Home() {

  return (
    <div className="container sub-page-container">
        <div className='header'>
            <h1>Salomon A/R Experience</h1>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>01 About:</h2>
                <p>The primary objective of the AR experience is to provide an immersive, interactive platform for customers to explore the features and benefits of this Salomon Shoe. This experience aims to enhance customer engagement, showcase the shoe's innovative design, and drive purchasing decisions by offering a detailed and captivating exploration of the product.</p>
                <div className="img-hold" style={{textAlign: 'left'}}>
                    <video width="100%" height="auto" controls>
                        <source src="/images/salomonarexperience/vid1.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </div>
  );
}
