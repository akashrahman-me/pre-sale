/* eslint-disable @next/next/no-img-element */
"use client";
import RoadmapCard from "@/app/RoadmapCard";
import React, {useEffect, useRef, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, {Settings} from "react-slick";

function SampleNextArrow(props: any) {
   const {className, style, onClick} = props;
   return (
      <div
         onClick={onClick}
         role="button"
         className="absolute top-[23%] left-[calc(50%-135px)] translate-x-[calc(270px-50%)]"
      >
         <img src="/images/Frame 1171275105.svg" alt="" />
      </div>
   );
}

function SamplePrevArrow(props: any) {
   const {className, style, onClick} = props;
   return (
      <div
         role="button"
         onClick={onClick}
         className="z-20 absolute top-[23%] left-[calc(50%-135px)] -translate-x-1/2"
      >
         <img src="/images/Frame 1171275106.svg" alt="" />
      </div>
   );
}

const settings: Settings = {
   centerMode: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   variableWidth: true,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,
};

function Roadmap() {
   return (
      <section>
         <div className="container py-[60px]">
            <div>
               <div>
                  <div className="text-center mb-28">
                     <h2 className="text-linear bg-gradient-to-t to-white from-white/50 text-[48px] leading-[1.25] font-semibold mb-4">
                        Roadmap
                     </h2>
                     <p className="text-xl">
                        Invest into the new standart of on-chain
                        trading
                     </p>
                  </div>
                  <div className="">
                     <Slider {...settings}>
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                        <RoadmapCard />
                     </Slider>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Roadmap;
