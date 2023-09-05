'use client';

import { useContext } from 'react';

import Image from 'next/image';
import PrimaryButton from '../ui/PrimaryButton';
import { HomeContext } from '@/contexts/HomeProvider';

const Hero = () => {
  const { homeData } = useContext(HomeContext);
  const { banner, isLoading } = homeData;

  if (isLoading || !banner) {
    return (
      <section className="relative h-[70vh] lg:h-[110vh] w-full">

      </section>
    );
  }

  return (
    <section className="relative h-[70vh] lg:h-[110vh] w-full">
      <video
        autoPlay
        muted
        loop
        className="h-[70vh] lg:h-[110vh] w-full absolute -z-10 object-cover"
      >
        <source src={banner.file_url} />
      </video>

      <div
        className="
        w-full
        h-full
        bg-gradient-to-l from-[#4671441A] via-transparent to-[#467144] opacity-50 mix-blend-color transition duration-500 duration-300
        absolute
        -z-10
        "
      />

      <div className="text-white flex items-center justify-center w-full h-full px-4 ">
        <div className="lg:pt-32 flex flex-col lg:flex-row items-center gap-2 lg:gap-12 ">
          <div>
            <Image
              src="nomeLogo.svg"
              width={288}
              height={288}
              alt="logo"
              className="z-10 drop-shadow-md hidden sm:block"
            />
          </div>

          <div className="lg:w-[430px] flex flex-col items-center lg:items-start gap-5">
            <h1 className="text-neutral-50 text-3xl font-light tracking-widest lg:tracking-normal text-center lg:text-start">
              joias em prata personalizadas para seu gosto
            </h1>
            <PrimaryButton>FAÇA AGORA SEU PEDIDO! </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="w-full h-5 bottom-0 absolute z-50">
        <Image src="/bottomHero.svg" fill alt="bottom" className="object-fill" />
      </div>
    </section>
  );
};

export default Hero;
