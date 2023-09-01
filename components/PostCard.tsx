import { PostCardInterface } from "@/types"
import Image from "next/image"
import Button from "./Button"

type Props = {
  post : PostCardInterface
}

const PostCard = ({post}:Props) => {
  return (
    <div className="w-full relative group cursor-pointer shadow-md hover:shadow-2xl bg-white transition-all">
      <div className="w-full min-h-[300px] relative overflow-hidden">
        <Image
          fill
          src={post.thumb.file_url}
          alt={post.title}
          className="object-cover group-hover:scale-125 transition-all"
        />
      </div>

      <div className="px-6 pt-7 flex flex-col gap-y-10 ">
        <div className="flex flex-col gap-5">
          <h4 className="text-3xl font-light leading-7 text-secondary">{post.title}</h4>
          <p className="text-zinc-500 text-base font-semibold leading-3 tracking-wide"> R$ {post.spot_value}</p>
        </div>

        <Button className="bg-transparent text-primary border border-primary hover:bg-primary hover:text-white"> Comprar </Button>
      </div>
    </div>
  )
}

export default PostCard
