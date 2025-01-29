"use client";

import React, { useEffect } from 'react';

export default function Home() {
    // Gather all images from the images folder without using require
    const imagePaths = [
        require('../../illustrations/img1.png'),
        require('../../illustrations/img2.jpg'),
        require('../../illustrations/img3.jpg'),
        require('../../illustrations/img4.jpg'),
        require('../../illustrations/img5.png'),
        require('../../illustrations/img6.png'),
        require('../../illustrations/img7.jpg'),
        require('../../illustrations/img8.png'),
        require('../../illustrations/img9.png'),
        require('../../illustrations/img10.jpg'),
        require('../../illustrations/img11.jpg'),
        require('../../illustrations/img12.jpg'),
        require('../../illustrations/img13.png'),
        require('../../illustrations/img14.png'),
        require('../../illustrations/img15.png'),
        require('../../illustrations/img16.png'),
        require('../../illustrations/img17.png'),
        require('../../illustrations/img18.png'),
        require('../../illustrations/img19.png'),
        require('../../illustrations/img20.png'),
        require('../../illustrations/img21.png'),
        require('../../illustrations/img22.png'),
        require('../../illustrations/img23.png'),
        require('../../illustrations/img24.jpg'),
    ];

  return (
    <div className="container sub-page-container">
        <div className='header'>
            <h1>Illustrations</h1>
        </div>
        {/** Get images from images folder */}
        <div className="row section-row">
            {imagePaths.map((imagePath, index) => (
                <div className="img-hold col-lg-3 col-xs-12" key={index}>
                    <img src={imagePath.default.src} alt={`Illustration ${index + 1}`} key={index}/>
                </div>
            ))}
        </div>
    </div>
  );
}
