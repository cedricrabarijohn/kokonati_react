import "./douceurBienvenue.css";
import bottleImage from "./assets/bottle.png";
import douceurSvg from "./assets/Douceur.svg";
import bienvenueSvg from "./assets/Bienvenue.svg";
import arrowSvg from "./assets/arrow.svg";

const DouceurBienvenue = () => {
  return (
    <div className="douceur-bienvenue">
      <div className="douceur-bienvenue-container">
        <div className="douceur-bienvenue-left">
          <img src={bottleImage} alt="bottle-kokonati" />
        </div>
        <div className="douceur-bienvenue-right">
          <div className="douceur-bienvenue-right-name">
            <img src={douceurSvg} className="douceur-svg" alt="douceur" />
            <img src={bienvenueSvg} className="bienvenue-svg" alt="bienvenue" />
          </div>
          <div className="douceur-bienvenue-right-text-arrow">
            <div className="douceur-bienvenue-right-text">learn more</div>
            <div className="douceur-bienvenue-right-arrow">
              <img src={arrowSvg} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DouceurBienvenue;
