import React from 'react'
import {Link} from 'react-router-dom';
import Product from '../components/Product'

const ProductPage = () => {
    return ( 
        <>
        <div>
            product page
        </div>
        <Product/>
        <Link to="/products"> </Link>
        </>
     );
}
 
export default ProductPage;