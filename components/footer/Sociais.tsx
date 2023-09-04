import Link from 'next/link';
import React from 'react';
import { FacebookSvg, InstagramSvg, PinterestSvg } from '../tsx-svg';



const Sociais = () => {
  const sociais = [FacebookSvg, InstagramSvg, PinterestSvg];

  return (
    <div className="flex gap-2 text-primary pt-4">
      {sociais.map((Social, index) => (
        <Link
          href="/"
          className="p-1.5 border border-primary hover:bg-primary hover:text-white transition duration-500"
          key={`sociais, ${index}`}
        >
          <Social />
        </Link>
      ))}
    </div>
  );
};

export default Sociais;
