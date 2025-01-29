"use client";

import React, { useEffect } from 'react';

export default function Home() {
    // Gather all images from the images folder
    const images = require.context('../../illustrations', false, /\.(png|jpe?g|svg)$/);

    // Create an array of image paths
    const imagePaths = images.keys().map(images);

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
