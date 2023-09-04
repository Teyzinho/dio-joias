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
      <Link href={`/produto/${product.slug}`}>
        <div className="w-full min-h-[300px] relative overflow-hidden">
          <Image
            fill
            src={product.thumb.file_url}
            alt={product.title}
            className="object-cover"
          />
        </div>
      </Link>

      <div className="px-6 py-7 flex flex-col h-[225px] gap-4">
        <Link href={`/produto/${product.slug}`}>
          <h4 className="text-2xl font-light text-secondary border-b border-primary">
            {product.title}
          </h4>
        </Link>
        <p className="text-neutral-500 text-xl font-semibold">
          R${product.spot_value}
        </p>
        <BuyButton
          className="text-white bg-primary font-bold px-2.5 py-2"
          productId={product.id}
          text="Comprar"
        />
      </div>
    </div>
  );
};

export default SecondaryProductCard;
