'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { FullProductInterface } from '@/types';
import Image from 'next/image';

import SecondaryButton from '../ui/SecondaryButton';
import Container from '../ui/Container';

type Props = {
  slug: string;
};

const FullProduct = ({ slug }: Props) => {
  const [post, setPost] = useState<null | FullProductInterface>(null);
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://job.risestudio.com.br/stocks/${slug}`,
        );
        setPost(response.data.data);

      } catch (error) {}
    };

    fetchPosts();
  }, [slug]);

  if (!post) {
    return <div>Loading</div>;
  }

  return (
    <Container className="flex pt-20">
      {/* Imagem */}
      <div className="flex-1 relative h-[1000px]">
        <Image
          fill
          src={post?.thumb.file_url || '/img.img'}
          alt="img"
          className="object-cover"
        />
      </div>

      {/* Protudo */}
      <div className="flex-1 px-12 flex flex-col gap-y-5">
        {/* Descrição */}
          <h1 className="text-neutral-700 text-3xl">{post?.title}</h1>

          <h4 className="text-neutral-600 text-2xl font-bold">
            R${post?.value}
          </h4>

          <p className="flex gap-2 items-center">
            <span className="text-zinc-500 text-sm">Parcele em X vezes</span>
            <span className="text-neutral-500 font-semibold">
              R${Math.floor(post?.value / 2)}
            </span>{' '}
            <span className="text-zinc-500 text-sm">s/juros</span>
          </p>

          <p className="text-neutral-600 h-20">{post?.short_desc}</p>

        {/* Detalhes Compra */}

          <p className='flex gap-2'>
            <span className="font-bold">Disponibilidade</span>
            <span
              className={`${
                post.amount >= 1 ? 'text-primary' : 'text-red-400'
              }`}
            >
              {post?.amount >= 1 ? 'Em estoque' : 'Indisponível'}
            </span>
          </p>

          {/* Botão Compra */}
          <form className="flex gap-2">
            <input
              type="number"
              value={quantity}
              min="1"
              className="py-1.5 text-center w-14 text-stone-500"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <SecondaryButton type="submit">Comprar</SecondaryButton>
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
    </Container>
  );
};

export default FullProduct;
