import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const CategoryContainer = ({ children }: Props) => {
  return (
    <main className="bg-bg min-h-screen pt-[60px]">
      <div className="w-full lg:max-w-[1240px] mx-auto px-5 flex flex-col-reverse lg:flex-row gap-y-7">{children}</div>
    </main>
  );
};

export default CategoryContainer;
