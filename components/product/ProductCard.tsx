import { FullProductInterface } from '@/types';
import Image from 'next/image';
import PrimaryButton from '../ui/PrimaryButton';
import Link from 'next/link';
import BuyButton from '../ui/BuyButton';

type Props = {
  product: FullProductInterface;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-full relative group shadow-md hover:shadow-2xl bg-white transition-all">
      <div className="w-full min-h-[300px] relative overflow-hidden">
        <Link href={`/produto/${product.slug}`}>
          <Image
            fill
            src={product.thumb.file_url}
            alt={product.title}
            className="object-cover group-hover:scale-125 transition-all"
          />
        </Link>
      </div>

      <div className="px-6 py-7 flex justify-between flex-col h-[225px] ">
        <div className="flex flex-col gap-5">
          <Link href={`/produto/${product.slug}`}>
            <h4 className="text-[28px] font-light leading-7 text-secondary">
              {product.title}
            </h4>
          </Link>
          <p className="text-zinc-500 text-base font-semibold leading-3 tracking-wsluge">
            R$ {product.spot_value}
          </p>
        </div>

        <BuyButton
          product={product}
          className="bg-transparent text-primary border border-primary hover:bg-primary hover:text-white"
          text={'COMPRAR'}
        />
      </div>
    </div>
  );
};

export default ProductCard;
