"use client";

import { BannerInterface } from "@/types";
import Image from "next/image";

type Props = {
  banner: BannerInterface;
};

const Hero = ({ banner }: Props) => {
  console.log("banner", banner);

  return (
    <section className="relative h-screen w-full">
      {/* <video autoPlay muted loop src={banner.file_url} /> */}

      <video autoPlay muted loop className="h-screen w-full absolute -z-10 object-cover">
        <source src={banner.file_url} />
      </video>

      {/* <Image
        src="nomeLogo.svg"
        width={120}
        height={50}
        alt="logo"
        className="z-10"
      /> */}

    </section>
  );
};

export default Hero;
