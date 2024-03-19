/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ChipProps {
   children?: React.ReactNode;
   icon?: string;
   className?: string;
}

function Chip({children, icon, className}: ChipProps) {
   return (
      <div className="flex justify-center" aria-label="Chip">
         <div
            className={`border  rounded-full flex justify-center items-center px-1.5 pr-2  gap-0.5 ${className}`}
         >
            {icon && <img src={icon} alt="" />}
            <span className="font-semibold text-[13px]">
               {children}
            </span>
         </div>
      </div>
   );
}

export default Chip;
