import React from "react";
// import "./P.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div id='portfolio-cmpnt-container'>
        <div>
          <p>
            <span>Portfolio</span>
          </p>
        </div>
        <div id='portfolio-logos'>
          <div class='portfolio-logo-container'>
            <div class='portfolio-logo-line'>
              <img src="https://static.wixstatic.com/media/132a22_c8bbc9968f4d4e7094ada4543bae9666~mv2.jpg/v1/fill/w_298,h_218,al_c,q_80,usm_0.66_1.00_0.01/Ardent-Logo-stacked-process-blue-cmyk_jp.webp" alt='Ardent-Logo-stacked-process-blue-cmyk_jp'/>
              <img src="https://static.wixstatic.com/media/132a22_32254ec560934b9e8fc367a61e294eba~mv2.jpg/v1/fill/w_309,h_194,al_c,q_80,usm_0.66_1.00_0.01/STEAM-for-All-Logo.webp" alt='STEAM-for-All-Logo'/>
              <img src="https://static.wixstatic.com/media/132a22_707013970bc84ee29a18e4fd4a4cd8e7~mv2.png/v1/fill/w_283,h_111,al_c,q_85,usm_0.66_1.00_0.01/chia.webp" alt='chia-logo'/>
            </div>
            <div class='portfolio-logo-line'>
              <img src="https://static.wixstatic.com/media/132a22_d47b9fe2e6a84bf48f609a8472957976~mv2.jpg/v1/fill/w_361,h_243,al_c,lg_1,q_80/PeerGenius.webp" alt='PeerGenius-logo'/>
              <img src="https://static.wixstatic.com/media/132a22_96c4edc8995c4e16a3286af85231445a~mv2.png/v1/fill/w_397,h_194,al_c,q_85,usm_0.66_1.00_0.01/voluntu1.webp" alt='voluntu1-logo'/>
            </div>
            

          </div>
        </div>
      </div>
    );
  }
};

export default Portfolio;