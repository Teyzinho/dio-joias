import Link from 'next/link';
import React from 'react';
import { FacebookSvg, InstagramSvg, PinterestSvg } from '../tsx-svg';

const Sociais = () => {
  const sociais = [FacebookSvg, InstagramSvg, PinterestSvg];
  return (
    <div className="hidden gap-4 sm:flex">
      {sociais.map((Social, index) => (
        <Link
          href="/"
          key={`Navsociais, ${index}`}
        >
          <Social />
        </Link>
      ))}
    </div>
  );
};

export default Sociais;
