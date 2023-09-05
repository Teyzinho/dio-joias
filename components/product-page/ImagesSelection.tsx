import Image from 'next/image';

const ImagesSelection = ({ images }: any) => {

  const reverseImages = images.slice().reverse();

  return (
    <div className="flex gap-4 pt-4">
      {reverseImages.map((image : any) => (
        <Image
          key={image.id}
          src={image.file_url}
          width={138}
          height={138}
          alt="imageSelection"
          className='object-cover w-[138px] h-[138px]'
        />
      ))}
    </div>
  );
};

export default ImagesSelection;
