interface NavbarConstantsInterface {
  title: string;
  href: string;
}

interface CategoriesConstantsInterface {
  especialSelection: string[];
  category: string[];
  male: string[];
}

export const navbarConstants: NavbarConstantsInterface[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Sobre Nós',
    href: '/',
  },
  {
    title: 'Seja um Representante',
    href: '/',
  },
  {
    title: 'Produtos',
    href: '/',
  },
  {
    title: 'Novidades',
    href: '/',
  },
  {
    title: 'Contato',
    href: '/',
  },
  {
    title: 'Carrinho',
    href: '/',
  },
  {
    title: 'Minha conta',
    href: '/',
  },
];
