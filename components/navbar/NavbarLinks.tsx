'use client';

import { useContext } from 'react';
import Link from 'next/link';
import LinkUnderline from '../ui/LinkUnderline';
import { CategoryContext } from '@/contexts/CategoryProvider';

const NavbarLinks = () => {
  const { categories: categoriesData } = useContext(CategoryContext);
  const { categories } = categoriesData;

  return (
    <div className="m-auto w-full max-w-[1240px] justify-center items-center gap-12 h-[90px] hidden lg:flex z-40">
      <Link href="/">Home</Link>
      <Link href="/">Sobre nós</Link>
      <Link href="/">Seja um Representante</Link>

      <div className="group">
        <Link href="/produtos" className='flex items-center gap-2'>
          Produtos <span className="border-x-4 border-x-transparent border-t-[6px] border-b-black"></span>
        </Link>

        <div className="invisible group-hover:visible translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 flex absolute bg-white flex-col p-6 gap-4 transition duration-500 delay-300">
          {categories?.map((item) => (
            <LinkUnderline className="no-underline" key={item.id}>
              {item.name}
            </LinkUnderline>
          ))}
        </div>
      </div>

      <Link href="/">Novidades</Link>
      <Link href="/">Contato</Link>
    </div>
  );
};

export default NavbarLinks;
