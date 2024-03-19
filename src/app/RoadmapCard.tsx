/* eslint-disable @next/next/no-img-element */
import React from "react";

interface RoadmapCardProps {}

function RoadmapCard(props: RoadmapCardProps) {
   return (
      <div className="flex items-center min-h-[365px] px-2.5 justify-center border border-transparent translate-x-1">
         <div
            className={`flex flex-col justify-center items-center rounded-[20px] text-center border-linear w-full my-1 p-1 roadmap-card`}
         >
            <div className="mb-4">
               <img src="/images/Frame 1171275087.svg" alt="" />
            </div>
            <b className="font-bold text-xl block mb-2">
               Q2 2024
            </b>
            <p className="text-lg text-white/70">
               MVP Launch: Tier Levels & reward system for
               traders
            </p>
         </div>
      </div>
   );
}

export default RoadmapCard;
