"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import imageTweet from "public/image-tweet.png";
import shortTweet from "public/short-tweet.png";
import longTweet from "public/long-tweet.png";

export const SwiperLg = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="relative hidden lg:block"
    >
      <SwiperSlide>
        <div className="grid grid-cols-7 gap-[30px] px-[60px]">
          <div className="col-span-2 space-y-[30px]">
            <Image
              className="h-auto w-full object-contain"
              src={imageTweet}
              alt="Tweet with an image"
              quality={100}
            />
            <Image
              className="h-auto w-full object-contain"
              src={shortTweet}
              alt="Tweet with an image"
              quality={100}
            />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-[30px] pt-[68px]">
            <div className="col-span-2">
              <Image
                className="h-auto w-full object-contain"
                src={longTweet}
                alt="Tweet with an image"
                quality={100}
              />
            </div>
            <div className="col-span-1">
              <Image
                className="h-auto w-full object-contain"
                src={shortTweet}
                alt="Tweet with an image"
                quality={100}
              />
            </div>
            <div className="col-span-1">
              <Image
                className="h-auto w-full object-contain"
                src={shortTweet}
                alt="Tweet with an image"
                quality={100}
              />
            </div>
          </div>
          <div className="col-span-2 space-y-[30px]">
            <Image
              className="h-auto w-full object-contain"
              src={shortTweet}
              alt="Tweet with an image"
              quality={100}
            />
            <Image
              className="h-auto w-full object-contain"
              src={imageTweet}
              alt="Tweet with an image"
              quality={100}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-7 gap-[30px]  px-[60px]">
          <div className="col-span-2 space-y-[30px]">
            <Image
              className="h-auto w-full object-contain"
              src={imageTweet}
              alt="Tweet with an image"
              quality={100}
            />
            <Image
              className="h-auto w-full object-contain"
              src={shortTweet}
              alt="Tweet with an image"
              quality={100}
            />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-[30px] pt-[68px]">
            <div className="col-span-2">
              <Image
                className="h-auto w-full object-contain"
                src={longTweet}
                alt="Tweet with an image"
                quality={100}
              />
            </div>
            <div className="col-span-1">
              <Image
                className="h-auto w-full object-contain"
                src={shortTweet}
                alt="Tweet with an image"
                quality={100}
              />
            </div>
            <div className="col-span-1">
              <Image
                className="h-auto w-full object-contain"
                src={shortTweet}
                alt="Tweet with an image"
                quality={100}
              />
            </div>
          </div>
          <div className="col-span-2 space-y-[30px]">
            <Image
              className="h-auto w-full object-contain"
              src={shortTweet}
              alt="Tweet with an image"
              quality={100}
            />
            <Image
              className="h-auto w-full object-contain"
              src={imageTweet}
              alt="Tweet with an image"
              quality={100}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
