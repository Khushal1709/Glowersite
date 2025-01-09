import React from 'react';
import './AllProduct.css';
import roundimg from '../assets/images/Brighten-Skin-1080x1500-1.webp';
import roundimg2 from '../assets/images/Reduce-Wrinkles-_-Fine-Lines-1080x1500-3.webp';
import IMG1 from '../assets/images/08++.jpg';
import IMG2 from '../assets/images/EMP024511.jpg';
import styled from "styled-components";

import ProductCard from "../components/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";
import "swiper/css";

const AllProduct = () => {
 
    const products = [
        { image: roundimg, title: "Neutrogena Oil-Free Acne ", buttonColor: "black" ,buttonText :"hello" },
        { image: roundimg, title: "Act+Acre Restorative Hair ", buttonColor: "black" },
        { image: roundimg2 , title: "Neutrogena Oil-Free Acne  ", buttonColor: "black" },
        { image: roundimg, title: "Neutrogena Oil-Free Acne ", buttonColor: "black" ,buttonText :"hello" },
        { image: roundimg2, title: "Brightening Skin Cream", buttonColor: "black" },
        { image: roundimg2 , title: "Neutrogena Oil-Free Acne  ", buttonColor: "black" },
        { image: roundimg, title: "Neutrogena Oil-Free Acne ", buttonColor: "black" ,buttonText :"hello" },
        { image: roundimg, title: "Act+Acre Restorative Hair ", buttonColor: "black" },
        { image: roundimg2 , title: "Neutrogena Oil-Free Acne  ", buttonColor: "black" },
                { image: roundimg, title: "Neutrogena Oil-Free Acne ", buttonColor: "black" ,buttonText :"hello" },
      ];
      
    return (
        <>
        
        <section className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        
          
            
        <section className="bg-white py-3 px-6  ms-auto me-auto">
  <div className="container flex flex-col items-center justify-center text-center">
    <Heading>
      SHOP WITH PROVEN RESULTS
    </Heading>
    <Subheading>
      Keep skin firm and tight with our skincare products, embracing beauty in your own skin.
    </Subheading>
  </div>
</section>

 
      </div>
    </section>
        
    
    <div className='care-section' style={{ padding: "20px",  }}>
    <Swiper
  spaceBetween={30}
  slidesPerView={1} // Default for small screens
  modules={[ Pagination]}
  pagination={{ clickable: true }}
  breakpoints={{
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
  
>
  {products.map((product, index) => (
    <SwiperSlide key={index}  >
      <ProductCard 
        image={product.image}
        title={product.title}
        buttonColor={product.buttonColor}
      />
    </SwiperSlide>
  ))}
</Swiper>

    </div>

    <section class="care-section">
  <div class="care-images-left  ">
    <div className="relative">
 <h1 className='absolute h-14 w-96 -left-56 -top-4 '>Skin Tone Face Cream</h1>
 </div>
    <img src={IMG1} alt="Skin Tone Face Cream" class="main-img2" />
    <button class="care-button">Buy Now </button>
  </div>



  <div class="product-card">
  <img src={IMG2} className=' relative' alt="Product Image"/>
  <div class="care-button2 absolute">  
  <img src={IMG2} className=' relative' width={"32px"} height={"32px"} alt="Product Image"/> <h1>Skin Tone Face Cream</h1>
    <p>
      We use advanced, scientifically-backed ingredients that nurture your skin.
      Our products are safe, gentle, and designed to support your skin's natural balance.
    </p></div>
</div>

</section>



        </>
    );
}

export default AllProduct;




const Heading = styled.h1`
  font-size: 2.5rem; /* Adjust size as needed */
  font-weight: bold;
  margin-bottom: 10px; /* Add spacing below the heading */
  word-wrap: break-word; /* Ensure long words break properly */
  text-align: center; /* Center-align the heading */
 width: 100%;
`;

const Subheading = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #555; /* Subtle gray color */
  line-height: 1.5; /* Add line height for better readability */
  max-width: 700px; /* Limit the width of the text */
  margin-left: auto;
  margin-right: auto; /* Center the subheading horizontally */
  text-align: center; /* Center-align the subheading */
`;






