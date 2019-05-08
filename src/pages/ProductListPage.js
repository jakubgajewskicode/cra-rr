import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'
const products = ["car", "bike", "motorbike"];

const ProductListPage = () => {

  const list = products.map(product => (
      <li key = {product}>
          <Link to = { `/product/${product}`}>{product}</Link>
      </li>
  ))

    return ( 
        <div className="products">

        <div>Products</div>
        <ul>
            {list}
        </ul>
        </div>
     );
}
 
export default ProductListPage;