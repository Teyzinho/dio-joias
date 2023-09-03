import Image from 'next/image';
import Link from 'next/link';

import { Montserrat } from 'next/font/google';

import CartIcon from '../cart/CartIcon';
import HamburgerButton from './HamburgerButton';
import SearchButton from '../ui/SearchButton';
import NavbarLinks from './NavbarLinks';

const montserrat = Montserrat({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <header className={`flex flex-col justify-center w-full text-white z-20 px-7 bg-primary ${montserrat.className} z-50`}>
      <div className="m-auto w-full max-w-[1240px] grid grid-cols-2 sm:grid-cols-2 justify-between items-center gap-5 py-3">
        {/* DeskTop */}
        <div className="hidden gap-4 sm:flex">
          <Link href="#">
            <Image
              src="/facebook.svg"
              width={24}
              height={24}
              alt="facebook"
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="instagram"
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/pinterest.svg"
              width={24}
              height={24}
              alt="pinterest"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Mobile Logo */}
        <div className="block sm:hidden">
          <Image
            src="/mobileLogo.png"
            width={160}
            height={55}
            alt="mobile Logo"
            className="object-cover"
          />
        </div>

        <div className="flex justify-end gap-4">
          <div className="hidden sm:flex gap-4">
            <Link href="#">
              <Image
                src="/user.svg"
                width={20}
                height={20}
                alt="user"
                className="object-contain"
              />
            </Link>

            <SearchButton />

            <Link href="#">
              <CartIcon />
            </Link>
          </div>

          <HamburgerButton />
        </div>
      </div>

      <NavbarLinks />
    </header>
  );
};

export default Navbar;
