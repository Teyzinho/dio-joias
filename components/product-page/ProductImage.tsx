'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ProductImage = ({ url }: { url: string }) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const percentX = (mouseX / width) * 100;
    const percentY = (mouseY / height) * 100;

    setMousePosition({ x: percentX, y: percentY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsZoomed(false)
  };

  const handleMouseEnter = () => {
    setIsZoomed(true)
  };


  return (
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
        height={50}
        src={url}
        alt="img"
        className={`absolute scale-150 top-0 w-full h-full ${isZoomed ? 'block': 'hidden'}`}
        style={{ transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`, width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ProductImage;
