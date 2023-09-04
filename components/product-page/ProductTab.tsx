const ProductTab = ({ desc }: { desc: string }) => {
  const active = 'border-t-4 border-primary';

  return (
    <div className="w-full">
      <ul className="h-12 border-t mt-14 flex font-bold">
        <li className={`h-full flex items-center cursor-pointer ${active}`}>
          Descrição
        </li>
      </ul>

      <p className="text-neutral-600 pt-5 text-sm">{desc}</p>
    </div>
  );
};

export default ProductTab;
