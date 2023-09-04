import Image from "next/image"

const ProductImage = ({url} : {url:string}) => {

  return (
    <div className="flex-1 relative h-[1000px]">
    <Image
      fill
      src={url}
      alt="img"
      className="object-cover"
    />
  </div>
  )
}

export default ProductImage
