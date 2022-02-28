import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js'
import '../Styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
    return (
        <div className='ProductReviews'>
           {productReviews.map((item,index)=>(
              <ProductReviewsCard price={item.price} image={item.image} review={item.review} index={item.index} key={item.image} />
           ))} 
        </div>
    )
}

export default ProductReviews
