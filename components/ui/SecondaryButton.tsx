import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
};

const SecondaryButton = ({ children, type = 'button', className }: Props) => {
  return (
    <button
      type={type}
      className={`bg-primary w-fit font-bold text-white px-4 py-1.5 hover:text-black hover:bg-[#9cbf9b] transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
