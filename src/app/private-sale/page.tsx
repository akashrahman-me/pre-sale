/* eslint-disable @next/next/no-img-element */
import Chip from "./common/Chip";
import SelectButton from "./common/SelectButton";
import TimeCount from "./common/TimeCount";
import Link from "next/link";
import React from "react";
import USDField from "./USDField";
import BuyButton from "./BuyButton";
import RoadmapCard from "./RoadmapCard";
import Roadmap from "./Roadmap";
import Header from "./Header";

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
    <div className="bg-[#020202] font-inter text-white">
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
                className="flex items-center rounded-full border border-[#5200FF] bg-[#5200FF] px-6 py-3 text-center text-[15px] font-medium text-white"
              >
                <span>Documentation</span>
              </Link>
              <div
                role="button"
                className="flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-center text-[14px] font-bold text-[#0B0C19]/80"
              >
                <img src="/images/ic_round-account-balance-wallet.svg" alt="" />
                <span>Connect wallet</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-6 py-5">
            {sections.map((section, index) => (
              <Link
                href={section.url}
                key={index}
                className="text-lg font-semibold"
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
            <div className="flex items-center gap-[132px]">
              <div className="flex flex-shrink-0  items-center gap-12">
                <div>
                  <img src="/images/Group 1171275108.svg" alt="" />
                  <h2 className="flex flex-col gap-2.5">
                    <span className="text-5xl font-semibold uppercase leading-[1.25] text-primary-700">
                      Get early
                    </span>
                    <span className="text-linear bg-gradient-to-t from-white/50 to-white text-[64px] font-semibold uppercase leading-[0.93]">
                      Access
                    </span>
                  </h2>
                </div>
                <div>
                  <img src="/images/Group 1171275109.png" alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-linear mb-4 bg-gradient-to-t from-white/50 to-white text-5xl font-semibold leading-[1.25]">
                  SmartWhales brings a new standard of on-chain trading{" "}
                </h4>
                <p className="mb-12 text-lg leading-[1.66]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&lsquo;s standard dummy text ever since.
                </p>
                <div className="flex">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-1 rounded-full bg-primary-700 py-3  pl-6 pr-3 text-[15px] font-medium text-white "
                  >
                    <span>Read more</span>
                    <img src="/images/Group 1171275110.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-[60px]">
          <div className="mx-auto max-w-[964px]">
            <div>
              <div className="mb-20 text-center">
                <h2 className="text-linear mb-4 bg-gradient-to-t from-white/50 to-white text-5xl font-semibold leading-[1.25]">
                  Buy $SWHALE token
                </h2>
                <p className="text-xl text-white">
                  Invest into the new standart of on-chain trading
                </p>
              </div>
              <div
                className="rounded-[20px] bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/Group 1171275112.png')`,
                }}
              >
                <div className="px-[60px] py-[70px]">
                  <div className="mb-10">
                    <h4 className="text-center text-[28px] leading-[1.07]">
                      Buy in before price increases!
                    </h4>
                  </div>
                  <div className="mb-12">
                    <div className="flex flex-col gap-3">
                      <div className="grid grid-cols-5 gap-1.5 ">
                        <Chip
                          className="border-[#FF0000]/50 bg-[#FF0000]/10 text-[#FF0000]"
                          icon="/images/fluent_lock-closed-20-filled.svg"
                        >
                          closed
                        </Chip>
                        <Chip
                          className="border-[#D97D24]/50 bg-[#FF0000]/10 text-[#D97D24]"
                          icon="/images/pepicons-pop_arrow-right.svg"
                        >
                          coming soon
                        </Chip>
                        <Chip className="border-[#EEBE44]/50 bg-[#EEBE44]/10 text-[#EEBE44]">
                          Closing in April 2024a
                        </Chip>
                        <Chip className="border-[#00A478]/50 bg-[#00A478]/10 text-[#00A478]">
                          May 2024
                        </Chip>
                        <Chip className="border-[#7C75FF]/50 bg-[#7C75FF]/10 text-[#7C75FF]">
                          Q2 2024
                        </Chip>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        <SelectButton selcted>Early-Bird</SelectButton>
                        <SelectButton>Seed Round</SelectButton>
                        <SelectButton>Private Sale</SelectButton>
                        <SelectButton>Public Round</SelectButton>
                        <SelectButton>Listing at Exchanges</SelectButton>
                      </div>
                      <div className="mt-1 grid grid-cols-5 gap-1.5">
                        <span className="flex justify-center text-xl font-bold leading-none text-[#D97D24]">
                          0.01$
                        </span>
                        <span className="flex justify-center text-xl font-bold leading-none text-[#D97D24]">
                          0.02$
                        </span>
                        <span className="flex justify-center text-xl font-bold leading-none text-[#D97D24]">
                          0.035$
                        </span>
                        <span className="flex justify-center text-xl font-bold leading-none text-[#D97D24]">
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
                        <b className="text-xs font-medium">Select network</b>
                      </div>
                      <div>
                        <div className="grid grid-cols-3 gap-2.5">
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
                          ].map(({ icon, value }, index) => (
                            <div
                              key={index}
                              role="button"
                              className="flex items-center justify-center gap-2.5 rounded-[10px] bg-white/10 px-4 py-2.5 duration-100 hover:bg-white/30"
                            >
                              <img src={icon} alt="" width={24} />
                              <span className="text-sm">{value}</span>
                            </div>
                          ))}
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
            <div className="mb-[70px] text-center">
              <h2 className="text-linear mb-4 bg-gradient-to-t from-white/50 to-white text-[48px] font-semibold leading-[1.25]">
                Tokenomics
              </h2>
              <p className="text-xl">
                Invest into the new standart of on-chain trading
              </p>
            </div>
            <div className="grid grid-cols-2 items-center gap-7">
              <div>
                <img src="/images/Frame 1171275090.svg" alt="" />
              </div>
              <div className="flex flex-col gap-12">
                <div className="ml-auto w-full max-w-[364px]">
                  <div className="flex">
                    <div className="w-2.5 rounded-l-[10px] bg-[#DF1DFF]" />
                    <div className="flex-grow rounded-[20px] rounded-l-md border border-dashed border-[#7C75FF]/50 bg-white/10 px-2.5 py-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="aspect-square w-3 rounded-full"
                          style={{
                            backgroundColor: "#DF1DFF",
                          }}
                        />
                        <div className="flex items-center gap-2.5 text-xl">
                          <b className="font-bold">12%</b>
                          <span className="font-medium">Seed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-auto w-full max-w-[364px] -translate-x-24">
                  <div className="flex">
                    <div className="w-3 rounded-l-[10px] bg-[#7C75FF]" />
                    <div className="flex-grow">
                      <div className="flex-grow rounded-[20px] rounded-l-md border border-dashed border-[#7C75FF] ">
                        <div className="flex items-center gap-2.5 bg-white/10 px-2.5 py-4">
                          <div
                            className="aspect-square w-3 rounded-full"
                            style={{
                              backgroundColor: "#7C75FF",
                            }}
                          />
                          <div>
                            <div className="flex items-center gap-2.5 text-xl">
                              <b className="font-bold">12%</b>
                              <span className="font-medium">Seed</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="px-6 py-5">
                            <div className="mb-5 flex items-center gap-4">
                              <p className="text-white/70">
                                Linear Monthly Vesting
                              </p>
                              <p>11 months</p>
                            </div>

                            <div className="flex w-max flex-col gap-2">
                              <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                                <span className="text-white/70">Cliff</span>
                                <span>1 month cliff</span>
                              </div>
                              <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                                <span className="text-white/70">Price</span>
                                <span>0.035$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-auto w-full max-w-[364px] -translate-x-5">
                  <div className="flex">
                    <div className="w-2.5 rounded-l-[10px] bg-[#D26FEB]" />
                    <div className="flex-grow rounded-[20px] rounded-l-md border border-dashed border-[#7C75FF]/50 bg-white/10 px-2.5 py-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="aspect-square w-3 rounded-full"
                          style={{
                            backgroundColor: "#D26FEB",
                          }}
                        />
                        <div className="flex items-center gap-2.5 text-xl">
                          <b className="font-bold">4%</b>
                          <span className="font-medium">Public Round</span>
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
          className="mx-auto max-w-[1920px] bg-contain bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url('/images/Group 1171275084.png')`,
          }}
        >
          <div className="container pb-48 pt-[60px]">
            <div>
              <div className="mb-32 text-center">
                <h2 className="text-linear mb-4 bg-gradient-to-t from-white/50 to-white text-[48px] font-semibold leading-[1.25]">
                  Token Utilities
                </h2>
                <p className="text-xl">
                  Invest into the new standart of on-chain trading
                </p>
              </div>
              <div>
                <div className="grid grid-cols-3 items-center gap-24">
                  <div className="flex flex-col gap-[120px]">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 [&:nth-child(2)]:-translate-x-16 [&:nth-child(3)]:-translate-x-7"
                      >
                        <div className="text-right">
                          <b className="mb-2 block text-xl font-bold">
                            Higher referral tier
                          </b>
                          <p className="text-lg text-white/70">
                            Get higher fee share % and access more platform
                            features
                          </p>
                        </div>
                        <img src="/images/Frame 1171275087 (1).svg" alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <img src="/images/Group 1171275113.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-[120px]">
                    {[...Array(2)].map((_, index) => (
                      <div key={index} className="flex flex-row-reverse gap-4">
                        <div className="text-left">
                          <b className="mb-2 block text-xl font-bold">
                            Higher referral tier
                          </b>
                          <p className="text-lg text-white/70">
                            Unlock the most profitable vaults
                          </p>
                        </div>
                        <img src="/images/Frame 1171275087 (1).svg" alt="" />
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
        <div className="container pb-[120px] pt-[60px]">
          <div>
            <div className="mb-[30px] text-center">
              <h2 className="text-linear mb-4 bg-gradient-to-t from-white/50 to-white text-[48px] font-semibold leading-[1.25]">
                Built With
              </h2>
              <p className="text-xl">
                Invest into the new standart of on-chain trading
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
                    className="relative z-0 grid min-h-[164px] place-content-center"
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
                <img src="/images/Frame 59726.svg" alt="" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4">
              {socials.map(({ icondark, url }, index) => (
                <Link key={index} href={url}>
                  <img src={icondark} alt="" />
                </Link>
              ))}
            </div>
            <div className="flex justify-end">
              <p className="text-xs text-white/40">
                @{new Date().getFullYear()} smartwhales.ai All right reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
