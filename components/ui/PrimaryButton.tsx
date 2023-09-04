import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
};

const PrimaryButton = ({ children, type = 'button', className }: Props) => {
  return (
    <button
      type={type}
      className={` w-fit text-sm font-normal  leading-relaxed tracking-wide px-8 py-4 transition duration-500 ${
        className ? className : 'text-white bg-primary'
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
