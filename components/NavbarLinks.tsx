import Link from 'next/link';

const NavbarLinks = () => {
  return (
    <div className="m-auto w-full max-w-[1240px] justify-center items-center gap-12 h-[90px] hidden lg:flex">
      <Link href="/">Home</Link>
      <Link href="/">Sobre nós</Link>
      <Link href="/">Seja um Representante</Link>

      <div>
        <Link href="/">Produtos <span className=" after:content-['\f140'] font"></span> </Link>
      </div>

      <Link href="/">Novidades</Link>
      <Link href="/">Contato</Link>
    </div>
  );
};

export default NavbarLinks;
