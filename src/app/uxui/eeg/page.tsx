"use client";

import React, { useEffect } from 'react';

export default function Home() {

  return (
    <div className="container sub-page-container">
        <div className='header'>
            <h1>Educational Empowerment Group</h1>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>01 About:</h2>
                <p>Educational Empowerment Group (EEG) is a leading charter school management company serving the educational landscape across Ohio. Established with a mission to transform education, EEG manages a network of charter schools designed to make a significant impact on student achievement and community development. The group focuses on providing extensive support to schools, offering solutions to overcome industry challenges such as staffing shortages, while also fostering strong community relationships.</p>
            </div>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>02 Persona:</h2>
                <div className="img-hold" style={{textAlign: 'left'}}>
                    <img src="/images/eeg/img2.png" alt="Tri-C Logo"/>
                </div>
            </div>
        </div>
        <div className="row section-row">
            <div className="container">
                <h2>03 Designs:</h2>
                <div className="img-hold">
                    <img src="/images/eeg/img3.png" alt="Tri-C Logo"/>
                </div>
            </div>
        </div>
    </div>
  );
}
