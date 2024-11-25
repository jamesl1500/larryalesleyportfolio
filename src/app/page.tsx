export default function Home() {
  return (
    <div className="container index-page-container">
      <div className="row">
        <div className="col-4">

        </div>
        <div className="window main-window col-4">
          <div className="title-bar">
            <div class="title-bar-text">
              Larry A Lesley's Portfolio
            </div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <menu role="tablist">
              <li role="tab" aria-selected="true"><a href="#tabs">Welcome</a></li>
            </menu>
            <div class="window" role="tabpanel">
              <div class="window-body">
                <p>Click a link to navigate the website</p>
              </div>
              <div class="window-tab-body">
                <div class="window-tab" id="welcome-tab">
                  <ul>
                    <li><a href="/about">Design</a></li>
                    <li><a href="/projects">Art</a></li>
                    <li><a href="/contact">Music</a></li>
                    <li><a href="">YouTube</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Saint Pierre</a></li>
                    <li><a href="">IRE Online</a></li>
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
