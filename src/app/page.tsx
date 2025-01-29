"use client";

import React, { useEffect } from 'react';

import '../scripts/scripts';

export default function Home() {

  useEffect(() => {
    // Change window tab
    const changeTab = (tab: string) => {
      const tabs = document.querySelectorAll('.window-tab');
      tabs.forEach((tab) => {
          tab.classList.remove('show');
      });
      const selectedTab = document.getElementById(tab);
      if (selectedTab) {
          selectedTab.classList.add('show');
      }
    };

    // Add event listeners to window tabs
    const tabs = document.querySelectorAll('.window-tab-btn');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const tabTarget = target.dataset.target;
          if (tabTarget) {
              changeTab(tabTarget);
          }
      });
    });
  });

  return (
    <div className="container index-page-container">
      <div className="row">
        <div className="col-4">

        </div>
        <div className="window main-window col-4" draggable="true">
          <div className="title-bar">
            <div className="title-bar-text">
              Larry A Lesley's Portfolio
            </div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <menu role="tablist">
              <li role="tab" aria-selected="true"><a href="#tabs">Welcome</a></li>
            </menu>
            <div className="window" role="tabpanel">
              <div className="window-body">
                <p>Click a link to navigate the website</p>
              </div>
              <div className="window-tab-body">
                <div className="window-tab show" id="welcome-tab">
                  <ul>
                    <li className="window-tab-btn" data-target="design-tab">Design</li>
                    <li className="window-tab-btn" data-target="art-tab">Art</li>
                    {/** <li><a href="#">Music</a></li> */}
                    <li><a href="https://www.youtube.com/@larryalesley">YouTube</a></li>
                    <li><a href="https://www.instagram.com/larryalesley">Instagram</a></li>
                    <li><a href="https://saintpierre.world">Saint Pierre</a></li>
                    <li><a href="https://ireonline.com">IRE Online</a></li>
                  </ul>
                </div>
                <div className="window-tab" id="design-tab">
                  <ul>
                    <li className="window-tab-btn" data-target="welcome-tab"><a href="">Back to main menu</a></li>
                    <li className="window-tab-btn" data-target="uxui-tab"><a href="">UX/UI</a></li>
                    <li className="window-tab-btn" data-target="branding-tab"><a href="">Branding</a></li>
                    <li><a href="/illustrations">Illustration</a></li>
                  </ul>
                </div>
                <div className="window-tab" id="art-tab">
                  <ul>
                    <li className="window-tab-btn" data-target="welcome-tab"><a href="">Back to main menu</a></li>
                    <li><a href="/okay">Okay</a></li>
                    <li><a href="/more">More</a></li>
                  </ul>
                </div>
                <div className="window-tab" id="branding-tab">
                  <ul>
                    <li className="window-tab-btn" data-target="design-tab"><a href="">Back to design menu</a></li>
                    <li><a href="/branding/tric">Tri-C</a></li>
                    <li><a href="/branding/tmobile">T-Mobile</a></li>
                    <li><a href="/branding/2026detroitgrandprix">2026 Detroit Grand Prix</a></li>
                  </ul>
                </div>
                <div className="window-tab" id="uxui-tab">
                  <ul>
                    <li className="window-tab-btn" data-target="design-tab"><a href="">Back to design menu</a></li>
                    <li><a href="/uxui/eeg">Educational Empowerment Group</a></li>
                    <li><a href="/uxui/cashnest">Cashnest</a></li>
                    <li><a href="/uxui/salomonarexperience">Salomon A/R Experience</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
  );
}
