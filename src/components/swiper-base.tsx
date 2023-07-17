"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import imageTweet from "public/image-tweet.png";
import shortTweet from "public/short-tweet.png";
import longTweet from "public/long-tweet.png";

export const SwiperBase = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="relative lg:hidden"
    >
      <SwiperSlide className="flex justify-center px-[60px]">
        <Image
          className="h-auto w-full max-w-[540px] object-contain"
          src={shortTweet}
          alt="A short tweet"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center px-[60px]">
        <Image
          className="h-auto w-full max-w-[540px] object-contain"
          src={imageTweet}
          alt="A short tweet"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center px-[60px]">
        <Image
          className="h-auto w-full max-w-[540px] object-contain"
          src={longTweet}
          alt="A short tweet"
        />
      </SwiperSlide>
    </Swiper>
  );
};
