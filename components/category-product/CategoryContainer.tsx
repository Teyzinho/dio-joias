import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const CategoryContainer = ({ children }: Props) => {
  return (
    <main className="bg-bg min-h-screen pt-[60px]">
      <div className="w-[1240px] mx-auto px-5 flex">{children}</div>
    </main>
  );
};

export default CategoryContainer;
