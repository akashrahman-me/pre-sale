/* eslint-disable @next/next/no-img-element */
import React from "react";

function BuyButton() {
   return (
      <div
         role="button"
         className="bg-white text-[#5200FF] py-[18px] px-10 rounded-full text-base font-bold flex justify-center items-center gap-2.5 uppercase shadow-sm"
      >
         <img src="/images/icon-park-solid_buy.svg" alt="" />
         <span>Buy Token</span>
      </div>
   );
}

export default BuyButton;
