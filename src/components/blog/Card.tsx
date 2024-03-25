import { DateTime } from "next-auth/providers/kakao"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface Props{
    image: StaticImageData,
    date: Date,
    heading: string,
    paragraph: string,
    url: string,
}

const Card = (children: Props) => {
  return (
    <div className="w-full  bg-[#202327] rounded-xl overflow-hidden relative">
        <div className="w-full h-[200px]">
            <Image className='w-full h-full object-cover' src={children.image} alt='blog image'/>
        </div>
        <div className="p-4 text-[#f5f2f0]">
            <p className="py-2 opacity-70 font-semibold">{children.date.toLocaleString()}</p>
            <h1 className="text-xl font-bold">{children.heading}</h1>
            <p className="py-2 pb-10 opacity-70">{children.paragraph}</p>
            <Link  className='text-lg text-[#057ffa]  absolute bottom-4 left-4' href={children.url}>Read article</Link>
        </div>
    </div>
  )
}

export default Card