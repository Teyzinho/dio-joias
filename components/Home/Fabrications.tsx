"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../ui/Container';
import Products from '../product/Products';
import Link from 'next/link';
import { FullProductInterface } from '@/types';

const Fabrications = () => {

  const [products, setProducts] = useState<null | FullProductInterface[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://job.risestudio.com.br/pages/home?featured=true"
        );
        setProducts(response.data.data.featured);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [])

  return (
    <Container className='pb-16'>
      <div className="py-[120px]">
        <div className="p-6 border-l-primary border border-transparent ">
          <p className="text-zinc-400 text-sm sm:text-base font-bold leading-loose">
            VIVENCIE A EXPERIÊNCIA USANDO NOSSAS JOIAS EM PRATA
          </p>
          <h2 className="text-primary text-4xl sm:text-5xl font-extralight leading-10">
            a arte que acompanha sua conquista
          </h2>
        </div>
      </div>

      <div className="flex justify-between mb-5">
        <div>
          <h3 className="text-secondary text-3xl font-semibold">fabricações</h3>
          <div className="w-7/12 absolute h-0.5 border-t border-[#A7CCA5]" />
        </div>
        <Link
          href="#"
          className="text-zinc-500 text-sm tracking-wide hover:text-secondary transition-all"
        >
          VER MAIS
        </Link>
      </div>
      {
        products && <Products products={products}/>
      }

    </Container>
  );
};

export default Fabrications;
