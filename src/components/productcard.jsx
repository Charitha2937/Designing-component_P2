// write product card here
// write product card here
import React from 'react';
import ViewProductButton from '../components/button';

const ProductCard = () => {
  const productImage = 'https://tse2.mm.bing.net/th?id=OIP.EFC_8Qw_U80ZVwgnXDyOGAHaHa&pid=Api&P=0&h=180://images-na.ssl-images-amazon.com/images/I/812Uj-F1WvL.jpg';
  const productName = 'Makeup Kit';
  const productPrice = 'Rs. 999';

  return (
    <div className="product_card">
      <img src={productImage} alt={productName} className="product_image" />

      <h3 className="product_name">{productName}</h3>

      <p className="product_price">{productPrice}</p>

      <ViewProductButton />
    </div>
  );
};

export default ProductCard;