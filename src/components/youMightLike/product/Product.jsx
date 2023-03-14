import "./product.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ className, image, imageAlt, title, description, price }) => {
  return (
    <div className={`product ${className}`}>
      <div className="product-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="product-title">{title}</div>
      <div className="product-description">{description}</div>
      <div className="product-actions">
        <div className="product-action-left product-price">$ {price}</div>
        <div className="product-action-right">
          <div className="product-heart">
            <AiOutlineHeart size={35} />
          </div>
          <div className="product-cart">
            <AiOutlineShoppingCart size={35} color={'white'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
