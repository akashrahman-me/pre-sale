/* eslint-disable @next/next/no-img-element */
import Chip from "@/components/common/Chip";
import SelectButton from "@/components/common/SelectButton";
import TimeCount from "@/components/common/TimeCount";
import Link from "next/link";
import React from "react";
import USDField from "./USDField";
import BuyButton from "./BuyButton";
import RoadmapCard from "./RoadmapCard";
import Roadmap from "./home/roadmap";
import Header from "./home/roadmap/Header";

const socials = [
   {
      icon: "/images/Twitter_x_logo.svg",
      icondark: "/images/Twitter_x_logo (1).svg",
      url: "/",
   },
   {
      icon: "/images/Medium_logo.svg",
      icondark: "/images/Medium_logo (1).svg",
      url: "/",
   },
   {
      icon: "/images/reddit.svg",
      icondark: "/images/reddit (1).svg",
      url: "/",
   },
   {
      icon: "/images/discord.svg",
      icondark: "/images/discord (1).svg",
      url: "/",
   },
   {
      icon: "/images/Frame.svg",
      icondark: "/images/Frame (1).svg",
      url: "/",
   },
];

const sections = [
   {
      name: "Home",
      url: "/",
   },
   {
      name: "About",
      url: "/",
   },
   {
      name: "Buy Token",
      url: "/",
   },
   {
      name: "Roadmap",
      url: "/",
   },
   {
      name: "Tokenomics",
      url: "/",
   },
   {
      name: "Utilities",
      url: "/",
   },
   {
      name: "built With",
      url: "/",
   },
];

function Home() {
   return (
      <div>
         <div>
            <div className="">
               <div className="container flex items-center py-5">
                  <div className="flex-grow">
                     <Link href="/">
                        <img src="/images/logo.svg" alt="" />
                     </Link>
                  </div>
                  <div className="flex items-center gap-5">
                     <div className="flex items-center gap-4">
                        {socials.map((social, index) => (
                           <Link href={social.url} key={index}>
                              <img src={social.icon} alt="" />
                           </Link>
                        ))}
                     </div>
                     <Link
                        href="/"
                        className="text-center px-6 py-3 border border-[#5200FF] bg-[#5200FF] text-white font-medium text-[15px] rounded-full flex items-center"
                     >
                        <span>Documentation</span>
                     </Link>
                     <div
                        role="button"
                        className="text-center px-5 py-3 bg-white font-bold text-[14px] rounded-full text-[#0B0C19]/80 flex items-center gap-2.5"
                     >
                        <img
                           src="/images/ic_round-account-balance-wallet.svg"
                           alt=""
                        />
                        <span>Connect wallet</span>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="flex items-center gap-6 justify-center py-5">
                  {sections.map((section, index) => (
                     <Link
                        href={section.url}
                        key={index}
                        className="font-semibold text-lg"
                     >
                        <span>{section.name}</span>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
         <Header />
         <section>
            <div className="container py-[60px]">
               <div>
                  <div className="flex gap-[132px] items-center">
                     <div className="flex gap-12  flex-shrink-0 items-center">
                        <div>
                           <img
                              src="/images/Group 1171275108.svg"
                              alt=""
                           />
                           <h2 className="flex flex-col gap-2.5">
                              <span className="font-semibold text-5xl leading-[1.25] uppercase text-primary-700">
                                 Get early
                              </span>
                              <span className="text-[64px] font-semibold uppercase leading-[0.93] text-linear bg-gradient-to-t to-white from-white/50">
                                 Access
                              </span>
                           </h2>
                        </div>
                        <div>
                           <img
                              src="/images/Group 1171275109.png"
                              alt=""
                           />
                        </div>
                     </div>
                     <div>
                        <h4 className="font-semibold text-5xl leading-[1.25] text-linear bg-gradient-to-t to-white from-white/50 mb-4">
                           SmartWhales brings a new standard of
                           on-chain trading{" "}
                        </h4>
                        <p className="text-lg leading-[1.66] mb-12">
                           Lorem Ipsum is simply dummy text of
                           the printing and typesetting
                           industry. Lorem Ipsum has been the
                           industry&lsquo;s standard dummy text
                           ever since.
                        </p>
                        <div className="flex">
                           <Link
                              href="/"
                              className="flex justify-center items-center text-[15px] font-medium bg-primary-700 text-white  gap-1 py-3 pl-6 pr-3 rounded-full "
                           >
                              <span>Read more</span>
                              <img
                                 src="/images/Group 1171275110.svg"
                                 alt=""
                              />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className="container py-[60px]">
               <div className="max-w-[964px] mx-auto">
                  <div>
                     <div className="text-center mb-20">
                        <h2 className="text-linear bg-gradient-to-t to-white from-white/50 font-semibold text-5xl leading-[1.25] mb-4">
                           Buy $SWHALE token
                        </h2>
                        <p className="text-xl text-white">
                           Invest into the new standart of
                           on-chain trading
                        </p>
                     </div>
                     <div
                        className="rounded-[20px] bg-center bg-cover"
                        style={{
                           backgroundImage: `url('/images/Group 1171275112.png')`,
                        }}
                     >
                        <div className="py-[70px] px-[60px]">
                           <div className="mb-10">
                              <h4 className="text-[28px] leading-[1.07] text-center">
                                 Buy in before price increases!
                              </h4>
                           </div>
                           <div className="mb-12">
                              <div className="flex flex-col gap-3">
                                 <div className="grid grid-cols-5 gap-1.5 ">
                                    <Chip
                                       className="text-[#FF0000] bg-[#FF0000]/10 border-[#FF0000]/50"
                                       icon="/images/fluent_lock-closed-20-filled.svg"
                                    >
                                       closed
                                    </Chip>
                                    <Chip
                                       className="text-[#D97D24] bg-[#FF0000]/10 border-[#D97D24]/50"
                                       icon="/images/pepicons-pop_arrow-right.svg"
                                    >
                                       coming soon
                                    </Chip>
                                    <Chip className="text-[#EEBE44] bg-[#EEBE44]/10 border-[#EEBE44]/50">
                                       Closing in April 2024a
                                    </Chip>
                                    <Chip className="text-[#00A478] bg-[#00A478]/10 border-[#00A478]/50">
                                       May 2024
                                    </Chip>
                                    <Chip className="text-[#7C75FF] bg-[#7C75FF]/10 border-[#7C75FF]/50">
                                       Q2 2024
                                    </Chip>
                                 </div>
                                 <div className="grid grid-cols-5 gap-1.5">
                                    <SelectButton selcted>
                                       Early-Bird
                                    </SelectButton>
                                    <SelectButton>
                                       Seed Round
                                    </SelectButton>
                                    <SelectButton>
                                       Private Sale
                                    </SelectButton>
                                    <SelectButton>
                                       Public Round
                                    </SelectButton>
                                    <SelectButton>
                                       Listing at Exchanges
                                    </SelectButton>
                                 </div>
                                 <div className="grid grid-cols-5 gap-1.5 mt-1">
                                    <span className="text-xl leading-none font-bold text-[#D97D24] flex justify-center">
                                       0.01$
                                    </span>
                                    <span className="text-xl leading-none font-bold text-[#D97D24] flex justify-center">
                                       0.02$
                                    </span>
                                    <span className="text-xl leading-none font-bold text-[#D97D24] flex justify-center">
                                       0.035$
                                    </span>
                                    <span className="text-xl leading-none font-bold text-[#D97D24] flex justify-center">
                                       0.065$
                                    </span>
                                    <div className="flex justify-center">
                                       <img
                                          src="/images/solar_flag-bold-duotone.svg"
                                          alt=""
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="mb-10">
                              <div>
                                 <div className="mb-2.5">
                                    <b className="font-medium text-xs">
                                       Select network
                                    </b>
                                 </div>
                                 <div>
                                    <div className="grid gap-2.5 grid-cols-3">
                                       {[
                                          {
                                             icon: "/images/ETH.svg",
                                             value: "Ethereum",
                                          },
                                          {
                                             icon: "/images/arbitrum-arb-logo 1.svg",
                                             value: "Arbitrum",
                                          },
                                          {
                                             icon: "/images/image 183.png",
                                             value: "Binance Smart Chain",
                                          },
                                       ].map(
                                          (
                                             {icon, value},
                                             index
                                          ) => (
                                             <div
                                                key={index}
                                                role="button"
                                                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/30 rounded-[10px] py-2.5 px-4 justify-center duration-100"
                                             >
                                                <img
                                                   src={icon}
                                                   alt=""
                                                   width={24}
                                                />
                                                <span className="text-sm">
                                                   {value}
                                                </span>
                                             </div>
                                          )
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="mb-[60px]">
                              <div className="grid grid-cols-2 gap-5">
                                 <USDField
                                    icon="/images/Group 1171275111.svg"
                                    defaultValue={0}
                                    label="USDT you pay"
                                 />
                                 <USDField
                                    icon="/images/Group 59728.svg"
                                    defaultValue={0}
                                    label="$SWHALE you receive"
                                 />
                              </div>
                           </div>
                           <div className="flex justify-center">
                              <BuyButton />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Roadmap />
         <section>
            <div className="container">
               <div>
                  <div className="text-center mb-[70px]">
                     <h2 className="text-linear bg-gradient-to-t to-white from-white/50 text-[48px] leading-[1.25] font-semibold mb-4">
                        Tokenomics
                     </h2>
                     <p className="text-xl">
                        Invest into the new standart of on-chain
                        trading
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-7 items-center">
                     <div>
                        <img
                           src="/images/Frame 1171275090.svg"
                           alt=""
                        />
                     </div>
                     <div className="flex gap-12 flex-col">
                        <div className="max-w-[364px] w-full ml-auto">
                           <div className="flex">
                              <div className="w-2.5 rounded-l-[10px] bg-[#DF1DFF]" />
                              <div className="py-4 border-[#7C75FF]/50 border rounded-[20px] rounded-l-md border-dashed flex-grow bg-white/10 px-2.5">
                                 <div className="flex gap-2.5 items-center">
                                    <div
                                       className="w-3 aspect-square rounded-full"
                                       style={{
                                          backgroundColor:
                                             "#DF1DFF",
                                       }}
                                    />
                                    <div className="text-xl flex gap-2.5 items-center">
                                       <b className="font-bold">
                                          12%
                                       </b>
                                       <span className="font-medium">
                                          Seed
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="max-w-[364px] w-full ml-auto -translate-x-24">
                           <div className="flex">
                              <div className="w-3 rounded-l-[10px] bg-[#7C75FF]" />
                              <div className="flex-grow">
                                 <div className="border-[#7C75FF] border rounded-[20px] rounded-l-md border-dashed flex-grow ">
                                    <div className="flex gap-2.5 items-center bg-white/10 px-2.5 py-4">
                                       <div
                                          className="w-3 aspect-square rounded-full"
                                          style={{
                                             backgroundColor:
                                                "#7C75FF",
                                          }}
                                       />
                                       <div>
                                          <div className="text-xl flex gap-2.5 items-center">
                                             <b className="font-bold">
                                                12%
                                             </b>
                                             <span className="font-medium">
                                                Seed
                                             </span>
                                          </div>
                                       </div>
                                    </div>

                                    <div>
                                       <div className="py-5 px-6">
                                          <div className="flex items-center gap-4 mb-5">
                                             <p className="text-white/70">
                                                Linear Monthly
                                                Vesting
                                             </p>
                                             <p>11 months</p>
                                          </div>

                                          <div className="w-max flex flex-col gap-2">
                                             <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                                                <span className="text-white/70">
                                                   Cliff
                                                </span>
                                                <span>
                                                   1 month cliff
                                                </span>
                                             </div>
                                             <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                                                <span className="text-white/70">
                                                   Price
                                                </span>
                                                <span>
                                                   0.035$
                                                </span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="max-w-[364px] w-full ml-auto -translate-x-5">
                           <div className="flex">
                              <div className="w-2.5 rounded-l-[10px] bg-[#D26FEB]" />
                              <div className="py-4 border-[#7C75FF]/50 border rounded-[20px] rounded-l-md border-dashed flex-grow bg-white/10 px-2.5">
                                 <div className="flex gap-2.5 items-center">
                                    <div
                                       className="w-3 aspect-square rounded-full"
                                       style={{
                                          backgroundColor:
                                             "#D26FEB",
                                       }}
                                    />
                                    <div className="text-xl flex gap-2.5 items-center">
                                       <b className="font-bold">
                                          4%
                                       </b>
                                       <span className="font-medium">
                                          Public Round
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div
               className="bg-contain bg-bottom bg-no-repeat max-w-[1920px] mx-auto"
               style={{
                  backgroundImage: `url('/images/Group 1171275084.png')`,
               }}
            >
               <div className="container pt-[60px] pb-48">
                  <div>
                     <div className="text-center mb-32">
                        <h2 className="text-linear bg-gradient-to-t to-white from-white/50 text-[48px] leading-[1.25] font-semibold mb-4">
                           Token Utilities
                        </h2>
                        <p className="text-xl">
                           Invest into the new standart of
                           on-chain trading
                        </p>
                     </div>
                     <div>
                        <div className="grid grid-cols-3 gap-24 items-center">
                           <div className="flex flex-col gap-[120px]">
                              {[...Array(3)].map((_, index) => (
                                 <div
                                    key={index}
                                    className="flex items-center gap-4 [&:nth-child(2)]:-translate-x-16 [&:nth-child(3)]:-translate-x-7"
                                 >
                                    <div className="text-right">
                                       <b className="block mb-2 font-bold text-xl">
                                          Higher referral tier
                                       </b>
                                       <p className="text-white/70 text-lg">
                                          Get higher fee share %
                                          and access more
                                          platform features
                                       </p>
                                    </div>
                                    <img
                                       src="/images/Frame 1171275087 (1).svg"
                                       alt=""
                                    />
                                 </div>
                              ))}
                           </div>
                           <div className="flex items-center">
                              <img
                                 src="/images/Group 1171275113.png"
                                 alt=""
                              />
                           </div>
                           <div className="flex flex-col gap-[120px]">
                              {[...Array(2)].map((_, index) => (
                                 <div
                                    key={index}
                                    className="flex flex-row-reverse gap-4"
                                 >
                                    <div className="text-left">
                                       <b className="block mb-2 font-bold text-xl">
                                          Higher referral tier
                                       </b>
                                       <p className="text-white/70 text-lg">
                                          Unlock the most
                                          profitable vaults
                                       </p>
                                    </div>
                                    <img
                                       src="/images/Frame 1171275087 (1).svg"
                                       alt=""
                                    />
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className="container pt-[60px] pb-[120px]">
               <div>
                  <div className="text-center mb-[30px]">
                     <h2 className="text-linear bg-gradient-to-t to-white from-white/50 text-[48px] leading-[1.25] font-semibold mb-4">
                        Built With
                     </h2>
                     <p className="text-xl">
                        Invest into the new standart of on-chain
                        trading
                     </p>
                  </div>
                  <div>
                     <div className="grid grid-cols-4 gap-x-12 gap-y-[30px]">
                        {[
                           "/images/Group 1171275098.svg",
                           "/images/Frame 1171275096.svg",
                           "/images/dexguru_logotype.svg",
                           "/images/Group 1171275101.svg",
                           "/images/Group 1171275103.svg",
                           "/images/Group 1171275114.svg",
                           "/images/image 215.png",
                           "/images/Group 1171275115.svg",
                        ].map((brand, index) => (
                           <div
                              key={index}
                              className="z-0 relative grid place-content-center min-h-[164px]"
                              role="button"
                           >
                              <img
                                 className="absolute inset-0 -z-10"
                                 src="/images/Group 1171275093.png"
                                 alt=""
                              />
                              <img src={brand} alt="" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <footer>
            <div className="container py-5">
               <div className="grid grid-cols-3 items-center">
                  <div>
                     <Link href="/">
                        <img
                           src="/images/Frame 59726.svg"
                           alt=""
                        />
                     </Link>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                     {socials.map(({icondark, url}, index) => (
                        <Link key={index} href={url}>
                           <img src={icondark} alt="" />
                        </Link>
                     ))}
                  </div>
                  <div className="flex justify-end">
                     <p className="text-xs text-white/40">
                        @{new Date().getFullYear()}{" "}
                        smartwhales.ai All right reserved.
                     </p>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}

export default Home;
