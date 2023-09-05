'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SearchSvg } from '../tsx-svg';
import { useModal } from '@/contexts/ModalProvider';

const ProductImage = ({ url }: { url: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(url)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const percentX = (mouseX / width) * 100;
    const percentY = (mouseY / height) * 100;

    setMousePosition({ x: percentX, y: percentY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsZoomed(false);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  return (
    <div className='relative lg:min-h-[400px] h-fit'>
      <button className='p-2 bg-white rounded-full absolute top-4 right-4 z-10' type='button' onClick={handleOpenModal}>
        <SearchSvg width={15} height={15}/>
      </button>
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative h-fit overflow-hidden"
    >

      <div className="flex-1 relative w-full">
        <Image
          width={500}
          height={50}
          style={{ width: '100%', height: 'auto' }}
          className="object-cover"
          src={url}
          alt="img"
        />
      </div>
      <Image
        width={500}
        height={600}
        src={url}
        alt="img"
        className={`absolute scale-150 top-0 w-full h-full ${
          isZoomed ? 'block' : 'hidden'
        }`}
        style={{
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
    </div>

  );
};

export default ProductImage;
