import React from 'react';
import Container from './Container';
import Posts from './Posts';
import Link from 'next/link';

const Fabrications = () => {
  return (
    <Container className="bg-[#FCFCFC]">

      <div className='my-[120px] p-6 border-l-primary border border-transparent '>
        <p className="text-zinc-400 font-bold leading-loose" >VIVENCIE A EXPERIÊNCIA USANDO NOSSAS JOIAS EM PRATA</p>
        <h2 className='text-primary text-5xl font-extralight leading-10'>a arte que acompanha sua conquista</h2>
      </div>

      <div>
        <div className="flex justify-between mb-5">
          <div>
            <h3 className="text-secondary text-3xl font-semibold">
              fabricações
            </h3>
            <div className="w-96 h-px border-t border-[#A7CCA5]" />
          </div>
          <Link
            href="#"
            className="text-zinc-500 text-sm tracking-wide hover:text-secondary transition-all"
          >
            VER MAIS
          </Link>
        </div>

        <Posts />
      </div>
    </Container>
  );
};

export default Fabrications;
