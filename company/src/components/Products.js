import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Products.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {Products} from '../data/Products' ;

function Card({ image_url, name, description1, id }) {
    return (
      <div className="card">
        <div className='imgbox'>
          <img
          src={image_url} alt={name} />
        </div>
        <div class="content">
          <h2>{name}</h2>
          <p>{description1}</p>
        </div>
      </div>
    );
  }

  export default function Product() {
  return (
    <section>
      <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold p-40">
          Products
        </h1>
      <div className="row">
        
        {Products.map((item, index) => (
          
            <Card
              image_url={item.image_url}
              name={item.name}
              description={item.description}
            />
         
        ))}
      </div>
       </section>
  );
}
