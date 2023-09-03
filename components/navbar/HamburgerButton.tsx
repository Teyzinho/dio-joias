'use client';

import { navbarConstants } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  console.log('isOpen', isOpen);

  {
    isOpen ? console.log('yes') : console.log('no');
  }

  return (
    <div className="lg:hidden z-50">
      <div
        className="flex items-center rounded-sm justify-center h-9 w-9 bg-white"
        onClick={handleChange}
      >
        <Image
          src={`${isOpen ? 'close.svg' : 'hamburger.svg'}`}
          width={15}
          height={15}
          alt="hamburguerbtn"
        />
      </div>

      <div
        className={`absolute w-full left-0 bg-white text-primary flex-col mt-6 text-xs ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        {navbarConstants.map((item) => (
          <Link key={item.title} href={item.href} className="p-4">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerButton;
