import { FullProductInterface } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import BuyButton from '../ui/BuyButton';

type Props = {
  product: FullProductInterface;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-full relative group shadow-md hover:shadow-2xl bg-white transition duration-500">
      <Link href={`/produto/${product.slug}`}>
        <div className="w-full min-h-[300px] relative overflow-hidden">
          <Image
            fill
            src={product.thumb.file_url}
            alt={product.title}
            quality={50}
            className="object-cover group-hover:scale-125 transition duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

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
          productId={product.id}
          text={'COMPRAR'}
        />
      </div>
    </div>
  );
};

export default ProductCard;
