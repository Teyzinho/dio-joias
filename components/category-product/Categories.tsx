'use client';

import Image from 'next/image';
import { useContext } from 'react';

import Input from '../ui/Input';
import TitleUnderline from '../ui/TitleUnderline';
import LinkUnderline from '../ui/LinkUnderline';

import { CategoryContext } from '@/contexts/CategoryProvider';
import { SearchSvg } from '../tsx-svg';

const Categories = () => {
  const { categories: categoriesData } = useContext(CategoryContext);
  const { categories } = categoriesData;

  return (
    <div className="w-full lg:w-[22%] lg:pr-[60px] flex flex-col gap-10 lg:border-r border-gray-200 ">
      {/* Pesquisa */}
      <div>
        <TitleUnderline>Pesquisar</TitleUnderline>

        <form className="flex gap-2 border-b border-gray-200 pt-2 pb-5 w-full relative">
          <Input type="text" className="w-full" />
          <button
            className="w-12 h-10 flex items-center justify-center border-primary border hover:bg-primary text-primary hover:text-white transition duration-500"
            type="submit"
          >
            <SearchSvg width={15} hanging={15}/>
          </button>
        </form>
      </div>

      {/* Categorias */}
      <TitleUnderline>Categorias</TitleUnderline>
      <div className="flex flex-col gap-2">
        {categories?.map((item) => (
          <LinkUnderline key={item.id}> {item.name} </LinkUnderline>
        ))}
      </div>
    </div>
  );
};

export default Categories;
