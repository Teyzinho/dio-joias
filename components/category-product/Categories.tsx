import Image from 'next/image';
import Input from '../ui/Input';
import TitleUnderline from '../ui/TitleUnderline';
import { CategoriesConstants } from '@/constants';
import LinkUnderline from '../ui/LinkUnderline';

const Categories = () => {
  return (
    <div className="w-22% pr-[60px] flex flex-col gap-10 border-r border-gray-200 ">
      {/* Pesquisa */}
      <div>
        <TitleUnderline>Pesquisar</TitleUnderline>
        <form className="flex gap-2 border-b border-gray-200 pt-2 pb-5">
          <Input type="text" />
          <button
            className="w-10 h-10 flex items-center justify-center border-primary border hover:bg-primary"
            type="submit"
          >
            <Image width={20} height={20} alt="search" src="search.svg" />
          </button>
        </form>
      </div>

      {/* Seleção Especial */}
      <TitleUnderline>Seleção Especial</TitleUnderline>
      <div className='flex flex-col gap-2'>
        {CategoriesConstants.especialSelection.map((item) => (
          <LinkUnderline key={item}> {item} </LinkUnderline>
        ))}
      </div>

      {/* Categorias */}
      <TitleUnderline>Categorias</TitleUnderline>
      <div className='flex flex-col gap-2'>
        {CategoriesConstants.category.map((item) => (
          <LinkUnderline key={item}> {item} </LinkUnderline>
        ))}
      </div>

      {/* Masculinos */}
      <TitleUnderline>Masculinos</TitleUnderline>
      <div className='flex flex-col gap-2'>
        {CategoriesConstants.male.map((item) => (
          <LinkUnderline key={item}> {item} </LinkUnderline>
        ))}
      </div>
    </div>
  );
};

export default Categories;
