"use client";

import React, { useEffect } from 'react';

export default function Home() {

  return (
    <div className="container sub-page-container">
        <div className='header'>
            <h1>2026 Detroit Grand Prix</h1>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>01 About:</h2>
                <p>The project aims to overhaul the Detroit Grand Prix’s environmental graphics, empha- sizing unique visual language and a sense of community impact. This entails creating im- mersive visual experiences through welcome signage at the main entrance, event branding with banners and flags throughout the venue, clear directional signs for parking, and event entrances, and parking signs. Vendor areas, including food stalls and merchandise booths, will also feature eye-catching graphics, while restroom signs will ensure easy navigation.</p>
                <div className="img-hold">
                    <img src="/images/2026detroitgrandprix/img1.png" alt="T-Mobile Logo"/>
                </div>
            </div>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>02 Rationale:</h2>
                <p>We  had a desire to find a crossroad between architecture and graphic design. By tasking ourselfs with Rebranding the Detroit Grand Prix and and Redesigning the signage I saw an opportunity to explore these disciplines in a practical and and impactful way.</p>
                <div className="img-hold">
                    <img src="/images/2026detroitgrandprix/img2.png" alt="T-Mobile Logo"/>
                </div>
            </div>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>03 Rationale:</h2>
                <div className="img-hold">
                    <img src="/images/2026detroitgrandprix/img3.png" alt="T-Mobile Logo"/>
                </div>
            </div>
        </div>
    </div>
  );
}
