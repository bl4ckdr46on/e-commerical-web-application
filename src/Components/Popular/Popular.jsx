import React, { useEffect, useState } from 'react';
import './popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((product, i) => { 
          return <Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />; 
        })}
      </div>
    </div>
  );
}

export default Popular;
