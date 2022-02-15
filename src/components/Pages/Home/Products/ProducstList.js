import React from 'react';
import Product from './Product';
import './index.css';
const ProductsList =({products})=>{
    return (
    <div className="row mt-3 mb-5">   
			{
				products &&	products.map(product=>(   
				<div className="col-6 col-md-6 col-lg-4 product-box">
				<Product 
				product={product} 
				/>
			</div>
      ))
			}
    </div>
    )};
  
  
  export default ProductsList;