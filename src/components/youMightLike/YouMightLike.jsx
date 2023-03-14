import Product from "./product/Product";
import "./youMightLike.css";
import youMightLikeSvg from "./assets/you-might-like.svg";
import bodyOilImage from "./assets/body-oil.png";
import cleanserImage from "./assets/cleanser.png";
import arrowSvg from "./assets/arrow.svg";

const YouMightLike = () => {
  return (
    <div className="you-might-like">
      <div className="you-might-like-container">
        <div className="you-might-like-left">
          <div className="you-might-like-svg">
            <img src={youMightLikeSvg} alt="you-might-like" width={310} />
          </div>
        </div>
        <div className="you-might-like-right">
          <div className="products">
            <Product
              className={"body-oil"}
              image={bodyOilImage}
              imageAlt="body-oil"
              title={`BODY OIL`}
              description={`hydrate and moisturize the skin, 
helps withe the appearance of
scars and stretch marks.`}
              price={15}
            />
            <Product
              className={"cleanser"}
              image={cleanserImage}
              imageAlt="cleanser"
              title={`CLEANSER`}
              description={`used to clean your face from any
          type of polluant and helps to
          clear pores.`}
              price={46}
            />
          </div>
          <div className="visit-catalog-arrow">
            <div className="visit-catalog-text-arrow">
              <div className="visit-catalog-text">visit catalog</div>
              <div className="visit-catalog-arrow">
                <img src={arrowSvg} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default YouMightLike;
