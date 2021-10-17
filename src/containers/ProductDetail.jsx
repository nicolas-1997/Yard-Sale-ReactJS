import React from "react";
import '../styles/ProductDetail.scss';
const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src="../assets/Platzi_YardSale_Icons/icon_close.png" alt="close" />
      </div>
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt
      />
      <div className="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          natus tempore ducimus id, sequi porro aspernatur ratione quos possimus
          dicta voluptatem rem numquam eaque? Assumenda cum fuga est
          necessitatibus perspiciatis?
        </p>
        <button className="primary-btn add-to-cart-btn">
          <img
            src="../assets/Platzi_YardSale_Icons/bt_add_to_cart.svg"
            alt="add to cart"
          />
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
