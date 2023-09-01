import Image from 'next/image';

const Carrinho = () => {
  return (
    <div className='group relative'>
      <div className="relative border-white rounded-sm h-9 w-9 lg:w-7 lg:h-7 flex items-center justify-center border-2 group-hover:bg-white transition-all">
        <div className="w-2.5 h-2.5 absolute rounded-tl-full rounded-tr-full border-l-2 border-r-2 border-t-2 border-neutral-50 -top-2" />
        <span className="text-xs font-semibold group-hover:text-black transition-all">
          2
        </span>
      </div>
      {/* Hover */}
      <div className="hidden group-hover:flex absolute mt-2 -right-1 bg-white px-4 py-6 text-black text-xs w-72 border-gray-300 border-2">
        Nenhum Produto no Carrinho
      </div>
    </div>
  );
};

export default Carrinho;
