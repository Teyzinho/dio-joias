import { ProductCardInterface } from '@/types';
import Image from 'next/image';
import PrimaryButton from '../ui/PrimaryButton';
import Link from 'next/link';

type Props = {
  post: ProductCardInterface;
};

const ProductCard = ({ post }: Props) => {
  return (
    <div className="w-full relative group shadow-md hover:shadow-2xl bg-white transition-all">
      <div className="w-full min-h-[300px] relative overflow-hidden">
        <Link href={`/produto/${post.slug}`}>
          <Image
            fill
            src={post.thumb.file_url}
            alt={post.title}
            className="object-cover group-hover:scale-125 transition-all"
          />
        </Link>
      </div>

      <div className="px-6 py-7 flex justify-between flex-col h-[225px] ">
        <div className="flex flex-col gap-5">
          <Link href={`/produto/${post.slug}`}>
            <h4 className="text-[28px] font-light leading-7 text-secondary">
              {post.title}
            </h4>
          </Link>
          <p className="text-zinc-500 text-base font-semibold leading-3 tracking-wsluge">
            R$ {post.spot_value}
          </p>
        </div>
        <Link href={`/produto/${post.id}`} className='w-fit'>
          <PrimaryButton className="bg-transparent text-primary border border-primary hover:bg-primary hover:text-white">
            Comprar{' '}
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;