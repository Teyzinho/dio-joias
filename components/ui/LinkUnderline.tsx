import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  className?: string
};

const LinkUnderline = ({ children,className }: Props) => {
  return (
    <Link
      href="#"
      className={`text-primary transition-all text-base font-normal underline hover:no-underline hover:text-lightPrimary ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkUnderline;
