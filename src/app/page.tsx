"use client";

import React, { useEffect } from 'react';

import '../app/scripts/scripts';

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
                    <li className="window-tab-btn" data-target="design-tab"><a href="/design">Design</a></li>
                    <li><a href="/art">Art</a></li>
                    <li><a href="/music">Music</a></li>
                    <li><a href="">YouTube</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Saint Pierre</a></li>
                    <li><a href="">IRE Online</a></li>
                  </ul>
                </div>
                <div className="window-tab" id="design-tab">
                  <ul>
                    <li className="window-tab-btn" data-target="welcome-tab"><a href="">Back to main menu</a></li>
                    <li><a href="">UX/UI</a></li>
                    <li><a href="">Branding</a></li>
                    <li><a href="">Illustration</a></li>
                  </ul>
                </div>
                <div className="window-tab" id="art-tab">

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
