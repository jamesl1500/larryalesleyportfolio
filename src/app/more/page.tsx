"use client";

import React, { useEffect } from 'react';

export default function Home() {

  return (
    <div className="container sub-page-container">
        <div className='header'>
            <h1>More</h1>
        </div>
        <div className="row section-row">
            <div className="container">
                <div className="img-hold">
                    <img src="/images/more/img1.jpeg" alt="Tri-C Logo"/>
                </div>
                <div className="img-hold">
                    <img src="/images/more/img2.jpeg" alt="Tri-C Logo"/>
                </div>
                <div className="img-hold">
                    <img src="/images/more/img3.jpeg" alt="Tri-C Logo"/>
                </div>
            </div>
        </div>
    </div>
  );
}
