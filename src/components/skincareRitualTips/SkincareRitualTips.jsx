import "./skincareRitualTips.css";
import skinCareSvg from "./assets/skin-care.svg";
import arrowSvg from "./assets/arrow.svg";

const SkincareRitualTips = () => {
  return (
    <div className="skin-care">
      <div className="skin-care-left">
        <img src={skinCareSvg} alt="skin-care" />
      </div>
      <div className="skin-care-right">
        <div className="skin-care-right-content">
          <div className="skin-care-right-text">
            it is necessary to prepare the skin for the care it is going to
            receive so every valuable nutrients could be absorbed, in order t
            have a healthy skin.
          </div>
          <div className="read-article">
            <div className="read-article-text-arrow">
              <div className="read-article-text">read article</div>
              <div className="read-article-arrow">
                <img src={arrowSvg} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkincareRitualTips;
