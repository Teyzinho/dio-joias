import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  className?: string
  href?: string;
};

const LinkUnderline = ({ children,className,href }: Props) => {
  return (
    <Link
      href={href ? href : `/`}
      className={`text-primary transition duration-500 text-base font-normal underline hover:no-underline hover:text-lightPrimary ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkUnderline;
