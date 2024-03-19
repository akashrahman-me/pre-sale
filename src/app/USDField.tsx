/* eslint-disable @next/next/no-img-element */
import React from "react";

interface USDFieldProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   icon: string;
   label: string;
}

function USDField(props: USDFieldProps) {
   const {icon, label, ...rest} = props;

   return (
      <div className="flex flex-col gap-2">
         <b className="font-medium text-xs">{label}</b>
         <label className="bg-white/20 flex rounded-md cursor-text">
            <input
               type="text"
               className="flex-grow p-2.5"
               {...rest}
            />
            <span className="block p-2.5" role="button">
               <img src={icon} alt="" />
            </span>
         </label>
      </div>
   );
}

export default USDField;
