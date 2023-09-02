import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const LinkUnderline = ({ children }: Props) => {
  return (
    <Link
      href="#"
      className="text-primary transition-all text-base font-normal underline hover:no-underline hover:text-lightPrimary"
    >
      {children}
    </Link>
  );
};

export default LinkUnderline;
