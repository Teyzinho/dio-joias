import Image from 'next/image';

const ProductImage = ({ url }: { url: string }) => {
  return (
    <div className="flex-1 relative w-full max-h-[1000px]">
      <Image
        width={500}
        height={50}
        style={{ width: '100%', height: 'auto' }}
        src={url}
        alt="img"
      />
    </div>
  );
};

export default ProductImage;
