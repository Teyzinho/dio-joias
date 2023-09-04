import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
};

const SecondaryButton = ({
  children,
  type = 'button',
  className,
  disabled,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        bg-primary w-fit font-bold
        text-white px-4 py-1.5
       hover:text-black
        hover:bg-[#9cbf9b]
        transition duration-500
        disabled:brightness-150
        disabled:cursor-not-allowed
        disabled:text-black
        ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
