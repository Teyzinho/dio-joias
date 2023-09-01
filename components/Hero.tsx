'use client';

import { BannerInterface } from '@/types';
import Image from 'next/image';
import Button from './Button';

type Props = {
  banner: BannerInterface;
};

const Hero = ({ banner }: Props) => {
  console.log('banner', banner);

  return (
    <section className="relative h-[70vh] lg:h-screen w-full">
      {/* <video autoPlay muted loop src={banner.file_url} /> */}

      <video
        autoPlay
        muted
        loop
        className="h-[70vh] lg:h-screen w-full absolute -z-10 object-cover"
      >
        <source src={banner.file_url} />
      </video>

      <div
        className="
        w-full
        h-full
        bg-gradient-to-bl from-[#4671441A] via-transparent to-[#467144] opacity-50 mix-blend-color transition-all duration-300
        absolute
        -z-10
        "
      ></div>

      <div className="text-white flex items-center justify-center w-full h-full px-4 ">
        <div className="lg:pt-32 flex flex-col lg:flex-row items-center gap-2 lg:gap-12 ">
          <div>
            <Image
              src="nomeLogo.svg"
              width={288}
              height={288}
              alt="logo"
              className="z-10 sepia-[10%] grayscale-[25%] hue-rotate-[5deg] contrast-50 brightness-125"
            />
          </div>

          <div className="lg:w-[430px] flex flex-col items-center lg:items-start gap-5">
            <h1 className="text-neutral-50 text-2xl font-light tracking-widest lg:tracking-normal text-center lg:text-start">
              joias em prata personalizadas para seu gosto
            </h1>
            <Button>FAÇA AGORA SEU PEDIDO! </Button>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 h-0 w-0 border-[0px,113.5px,150px,113.5px] border-black' />

    </section>
  );
};

export default Hero;
