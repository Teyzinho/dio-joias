import Image from 'next/image';
import Sociais from './Sociais';
import Input from '../ui/Input';
import { footerConstants } from '@/constants';
import Link from 'next/link';

import logo from '@/public/dio-logo.png';

const Footer = () => {
  return (
    <footer className="min-h-[400px] flex flex-col w-full items-center pt-16 md:pt-0 justify-center ">

      <div className="max-w-[900px] px-4 grid md:grid-cols-3 gap-5 gap-y-16 pb-7">

        {/* Logo e Sociais */}
        <div className="w-full flex flex-col items-center md:items-start md:w-fit md:py-0">
          <div className="relative flex justify-center w-full h-auto md:w-[225px] md:h-[78px]">
            <Image src={logo} className="object-cover w-auto h-auto" alt="logo" />
          </div>
          <Sociais />
        </div>

        {/* Sobre Nós */}
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-light text-secondary">sobre nós</h4>
          <p className="text-zinc-500 text-base leading-relaxed">
            Vivemos na época que a autoestima impacta diretamente a vida das
            pessoas. Joias para todos os estilos, gostos e bolsos.
          </p>
        </div>

        {/* Novidades */}
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-light text-secondary">
            fique por dentro de nossas novidades
          </h4>
          <Input
            className="w-52 h-10 p-3 placeholder:text-primary"
            type="email"
            placeHolder="Seu Email"
          />
          <button className="w-fit px-3 py-2 mt-2 border border-gray-200 hover:bg-primary">
            Cadastrar
          </button>
        </div>
      </div>

      {/* Dados Rodapé*/}
      <div className="flex px-4  max-w-[900px]  w-full gap-x-6 flex-wrap pt-4 border-t-[1px] border-lightPrimary/50">
        {footerConstants.map((item) => (
          <Link
            href="/"
            key={item}
            className="text-neutral-400 text-base font-normal transition duration-500 hover:text-secondary"
          >
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
