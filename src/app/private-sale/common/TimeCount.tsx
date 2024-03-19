/* eslint-disable @next/next/no-img-element */
import React from "react";

interface TimeCountProps {
   label: string;
   value: number;
}

function TimeCount({label, value}: TimeCountProps) {
   return (
      <div>
         <div className="flex flex-col items-center gap-[18px]">
            <b className="uppercase text-sm font-bold text-[#E8E8E8]">
               {label}
            </b>
            <div className="bg-[#0C0C0C] rounded-md w-28 h-[100px] flex items-center justify-center z-0 relative">
               <img
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                  src="/images/time-overly.svg"
                  alt=""
               />
               <span className="font-bold text-[60px] block text-center">
                  {value.toString().padStart(2, "0")}
               </span>
            </div>
         </div>
      </div>
   );
}

export default TimeCount;
