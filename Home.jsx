import React from 'react';
import './Home.css';
import roundimg from '../assets/images/Brighten-Skin-1080x1500-1.webp';
import roundimg2 from '../assets/images/Reduce-Wrinkles-_-Fine-Lines-1080x1500-3.webp';
import roundimg3 from '../assets/images/05.jpg';
import img1 from '../assets/images/09.jpg';
import img2 from '../assets/images/EMP024511.jpg';
import ProductCard from "../components/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {
  const products2 = [
    { image: roundimg, title: "Neutrogena Oil-Free Acne ", buttonColor: "black" },
    { image: roundimg, title: "Act+Acre Restorative Hair ", buttonColor: "black" },
    { image: roundimg2 , title: "Neutrogena Oil-Free Acne  ", buttonColor: "black" },
    { image: roundimg2, title: "Brightening Skin Cream", buttonColor: "black" },
  ];
    return (
        <>
        
        <section className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">GROW UP YOUR SKIN WITH <br /> OUR EXPERTISE</h1>
          <p className="text-gray-600">
            Experience perfect tone and restore your skin to its natural beauty.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end mt-8 md:mt-0">
          {/* Image */}
          <div className="flex items-center space-x-2 mb-4 relative pl-6">
            <img
              src={roundimg} // Replace with the actual image path
              alt="Skin Care"
              className="w-12 h-12 rounded-full border-2 border-with-300 absolute  left-1 "
            />
             <img
              src={roundimg2} // Replace with the actual image path
              alt="Skin Care"
              className="w-12 h-12 rounded-full border-2 border-with-300 absolute  left-4"
            />
             <img
              src={roundimg} // Replace with the actual image path
              alt="Skin Care"
              className="w-12 h-12 rounded-full border-2 border-with-300 absolute left-9 "
            />
            <span className="text-gray-600 pl-16">Book Appointment and <br/> Connect with us</span>
          </div>

          {/* Button */}
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 w-96 rounded-full shadow-md hover:shadow-lg focus:outline-none">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
        



    {/* prodect */}
  <div className='care-section' style={{ padding: "20px" ,marginTop:"20px"}}>
  <h1>OUR PRODUCTS</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        modules={[Autoplay , Pagination]} // Register the Autoplay module
        breakpoints={{
          375: { slidesPerView: 1 },
          412: { slidesPerView: 1 }, 
          430: { slidesPerView: 1 },
          390: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, // 2 slides on medium screens
          1024: { slidesPerView: 4 },
          2560: { slidesPerView: 4 }, // 4 slides on larger screens
        }}
      >
        {products2.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard 
              image={product.image} 
              title={product.title} 
              buttonColor={product.buttonColor} 
            />  
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </>
    );
}

export default Home;
