import React from "react";

interface SelectButtonProps {
   onClick?: () => void;
   children?: React.ReactNode;
   selcted?: boolean;
}

function SelectButton(props: SelectButtonProps) {
   const {onClick, children, selcted} = props;

   return (
      <div
         role="button"
         className={`${
            selcted
               ? "bg-[#D97D24]"
               : "bg-transparent border border-white/20 hover:bg-[#D97D24]/10"
         } min-h-[42px] grid place-content-center py-1 px-0.5 w-full`}
      >
         <span>{children}</span>
      </div>
   );
}

export default SelectButton;
