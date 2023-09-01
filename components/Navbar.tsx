import Image from 'next/image';
import Link from 'next/link';
import Carrinho from './Carrinho';
import HamburgerButton from './HamburgerButton';
import SearchButton from './SearchButton';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <header className="absolute flex flex-col justify-center w-full text-white z-20 px-7">
      <div className="m-auto w-full max-w-[1240px] grid grid-cols-2 sm:grid-cols-[1fr,auto,1fr] justify-between items-center gap-5 py-3">

        {/* DeskTop */}
        <div className="hidden gap-4 sm:flex">
          <Link href="#">
            <Image
              src="/facebook.svg"
              width={24}
              height={24}
              alt="logo"
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="logo"
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/pinterest.svg"
              width={24}
              height={24}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Mobile Logo */}
        <div className='block sm:hidden'>
          <Image
            src="/mobileLogo.png"
            width={160}
            height={55}
            alt='mobile Logo'
            className='object-cover'
          />
        </div>

        <Link href="/" className='hidden sm:block'>
          <Image src="/logo.png" width={90} height={80} alt="logo" className="object-contain" />
        </Link>

        <div className="flex justify-end gap-4">
          <div className='hidden sm:flex gap-4'>
            <Link href="#">
              <Image src="/user.svg" width={20} height={20} alt="logo" className="object-contain" />
            </Link>

            <SearchButton />

            <Link href="#">
              <Carrinho />
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
