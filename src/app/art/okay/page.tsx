"use client";

import React, { useEffect } from 'react';

export default function Home() {

  return (
    <div className="container sub-page-container">
        <div className='header'>
            <h1>Okay</h1>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>01 About:</h2>
                <p>The art show "Okay" invites you to delve into the realm of artistic expression and exploration. With a profound understanding that perfection is not the ultimate goal, this collection of prints encapsulates the sentiment, "it's not okay, but that's okay." This phrase symbolizes the shared experience of numerous creatives who find themselves in a transitional phase, where they haven't yet reached their desired artistic zenith, but they remain resilient and optimistic on their path to self-realization</p>
                <div className="img-hold" style={{textAlign: 'left'}}>
                    <img src="/images/okay/img1.png" alt="Tri-C Logo"/>
                </div>
            </div>
        </div>
    </div>
  );
}
