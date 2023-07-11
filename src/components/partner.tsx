import Image, { StaticImageData } from "next/image";

export const Partner = ({
  src,
  alt,
  quality = 100,
}: {
  src: StaticImageData;
  alt: string;
  quality?: number;
}) => {
  return (
    <div className="relative flex h-[76px] items-center justify-center rounded-[10px] bg-gradient-to-b from-white/5 to-white/0 py-[25px] lg:h-[130px] lg:py-[45px]">
      <div className="absolute inset-0 rounded-[10px] border border-[#5200FF66]" />
      <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black" />
      <Image
        className="relative h-full w-auto object-contain"
        src={src}
        alt={alt}
        quality={quality}
      />
    </div>
  );
};
