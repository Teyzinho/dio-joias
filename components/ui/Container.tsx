import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className="px-4 sm:px-2 bg-bg shadow-lg">
      <section
        className={`w-full xl:w-[1180px] min-h-[30vh] mx-auto ${className} relative`}
      >
        {children}
      </section>
    </div>
  );
};

export default Container;
