import { FullProductInterface } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import BuyButton from '../ui/BuyButton';

type Props = {
  product: FullProductInterface;
};

const SecondaryProductCard = ({ product }: Props) => {
  return (
    <div className="w-full max-w-[285px] relative group shadow-md hover:shadow-2xl bg-white transition-all">
      <div className="w-full min-h-[300px] relative overflow-hidden">
        <Link href={`/produto/${product.slug}`}>
          <Image
            fill
            src={product.thumb.file_url}
            alt={product.title}
            className="object-cover"
          />
          {/* {product.condition === 'new' && (
            <div className="absolute top-0 left-0 bg-secondary text-white px-3 py-2">Novidade</div>
          )} */}
        </Link>
      </div>

      <div className="px-6 py-7 flex flex-col h-[225px] gap-4">
        <Link href={`/produto/${product.slug}`}>
          <h4 className="text-2xl font-light text-secondary border-b border-primary">
            {product.title}
          </h4>
        </Link>
        <p className="text-neutral-500 text-xl font-semibold">
          R${product.spot_value}
        </p>
          <BuyButton product={product}>Comprar</BuyButton>
      </div>
    </div>
  );
};

export default SecondaryProductCard;
