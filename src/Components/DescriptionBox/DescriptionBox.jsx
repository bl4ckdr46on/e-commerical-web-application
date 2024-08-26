import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It services asa a virual marketplace where businesses and
                and individuals can showcase their products, interact with customers and conduct transactions without the need for a physical presencs. E-commerce websites have gained immense popularity due to
                their convernience,accessibility and the gobal reach they offer.
            </p>
        </div>
    </div>
  )
}
export default DescriptionBox