import { IMG_CDN_URL } from "../config";

const MenuItem = ({ id, name, price, description, cloudinaryImageId }) => {
  return (
    <div className="menu-items-container">
      <div className="menu-texts">
        <h2>{name}</h2>
        <div>{price / 100}</div>
        <div>{description}</div>
      </div>
      <img className="menu-item-img" src={IMG_CDN_URL + cloudinaryImageId} />.
    </div>
  );
};

export default MenuItem;
