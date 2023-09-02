"use client"

import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Input from '../ui/Input';
import TitleUnderline from '../ui/TitleUnderline';
import LinkUnderline from '../ui/LinkUnderline';

import { CategoriesInterface } from '@/types';

const Categories = () => {

  const [categories, setCategories] = useState<null | CategoriesInterface[]>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://job.risestudio.com.br/categories',
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);



  return (
    <div className="w-full lg:w-[22%] lg:pr-[60px] flex flex-col gap-10 lg:border-r border-gray-200 ">
      {/* Pesquisa */}
      <div>
        <TitleUnderline>Pesquisar</TitleUnderline>
        <form className="flex gap-2 border-b border-gray-200 pt-2 pb-5 w-full">
          <Input type="text" className='w-full'/>
          <button
            className="w-10 h-10 flex items-center justify-center border-primary border hover:bg-primary"
            type="submit"
          >
            <Image width={20} height={20} alt="search" src="search.svg" />
          </button>
        </form>
      </div>

      {/* Categorias */}
      <TitleUnderline>Categorias</TitleUnderline>
      <div className='flex flex-col gap-2'>
        {categories?.map((item) => (
          <LinkUnderline key={item.id}> {item.name} </LinkUnderline>
        ))}
      </div>

    </div>
  );
};

export default Categories;
