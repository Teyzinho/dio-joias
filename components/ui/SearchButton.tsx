"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleClick = (value : boolean) => {
    setIsOpen(value);

    searchRef.current?.focus();
  };

  return (
    <div className="relative">
      <button type="button" onClick={() => handleClick(true)}>
        <Image
          src="/search.svg"
          width={20}
          height={20}
          alt="logo"
          className="object-contain"
        />
      </button>

      <form
        className={`absolute -right-1 hidden -top-1/2 h-11 items-center bg-white ${
          isOpen && 'flex'
        }`}
      >
        <input type="text" ref={searchRef} className="h-full w-60" />
        <button
          type="button"
          className="text-black w-11 flex justify-center"
          onClick={() => handleClick(false)}
        >
          <Image
            src="/search.svg"
            width={20}
            height={20}
            alt="logo"
            className="object-contain"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchButton;
