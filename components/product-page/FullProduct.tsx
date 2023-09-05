'use client';

import { useContext, useEffect, useState } from 'react';

import SecondaryButton from '../ui/SecondaryButton';
import Container from '../ui/Container';
import ProductTab from './ProductTab';
import { ProductPageContext, fetchProductPage } from '@/contexts/ProductPage';
import ProductImage from './ProductImage';
import GreenBuyButton from '../ui/GreenBuyButton';
import ImagesSelection from './ImagesSelection';
import Variants from './Variants';

type Props = {
  slug: string;
};

const FullProduct = ({ slug }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');

  const { product: fullProductdata, setProduct } =
    useContext(ProductPageContext);
  const { isLoading, product } = fullProductdata;

  useEffect(() => {
    fetchProductPage(setProduct, slug);
  }, [setProduct, slug]);

  if (!product || isLoading) {
    return <Container className="h-screen"> </Container>;
  }

  const hasVariants = product.variations.length >= 1

  return (
    <Container className="pt-20 px-4">
      <div className="flex flex-col lg:flex-row">
        {/* Imagem */}
        <div>
          <ProductImage url={product?.thumb.file_url} />
          {product.images.length > 1 && (
            <ImagesSelection images={product.images} />
          )}
        </div>

        {/* Protudo */}
        <div className="flex-1 pt-8 lg:pt-0 lg:px-12 flex flex-col gap-y-5">
          {/* Descrição */}
          <h1 className="text-neutral-700 text-3xl">{product?.title}</h1>

          <h4 className="text-neutral-600 text-2xl font-bold">
            R${product?.value}
          </h4>

          <p className="flex gap-2 items-center">
            <span className="text-zinc-500 text-sm">Parcele em X vezes</span>
            <span className="text-neutral-500 font-semibold">
              R${Math.floor(product?.value / 2)}
            </span>{' '}
            <span className="text-zinc-500 text-sm">s/juros</span>
          </p>

          <p className="text-neutral-600 min-h-[30px]">{product?.short_desc}</p>

          {/* Variants */}
          {hasVariants && <Variants product={product} />}

          {/* Detalhes Compra */}
          <p className="flex gap-2">
            <span className="font-bold">Disponibilidade</span>
            <span
              className={`${
                product.amount >= 1 ? 'text-primary' : 'text-red-400'
              }`}
            >
              {product?.amount >= 1 ? 'Em estoque' : 'Indisponível'}
            </span>
          </p>

          {/* Botão Compra */}
          <form className="flex gap-2">
            <input
              type="number"
              value={quantity}
              min="1"
              max={product.amount}
              className="py-1.5 text-center w-14 text-stone-500"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <GreenBuyButton text="Comprar" productId={product.id} />
          </form>

          {/* Frete */}
          <div className="flex gap-2 flex-col">
            <span>Calcular-Frete</span>
            <div className="flex gap-2">
              <input
                type="text"
                id="cep"
                placeholder="00000-000"
                value={cep}
                maxLength={9}
                onChange={(e) => setCep(e.target.value)}
                className="w-28 px-2 text-stone-500 text-base font-normal"
              />
              <SecondaryButton>Ok</SecondaryButton>
            </div>
          </div>
        </div>
      </div>

      <ProductTab desc={product.desc} />
    </Container>
  );
};

export default FullProduct;
