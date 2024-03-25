import Image, { StaticImageData } from "next/image"

interface Props {
    index: number,
    image: StaticImageData,
    icon: JSX.Element,
    iconColor: string,
    heading: string,
    paragraph: string
}



const FeatureTestimonials = ({ index, image, icon, iconColor, heading, paragraph }: Props) => {
    return (
        <div className={`my-10 flex basis-0 grow-1 flex-col lg:flex-row flex-col-reverse ${index % 2 === 0 && 'lg:flex-row-reverse'}`}>
            <div className={`my-4 w-full ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className={`w-full flex ${index % 2 !== 0 && 'justify-end'}`} >
                    <div className='p-4 mx-4 text-3xl text-[#f5f2f0] rounded-full' style={{ backgroundColor: iconColor }}>
                        {icon}
                    </div>
                </div>
                <h1 className="my-5 lg:p-4 text-5xl text-[#f5f2f0] font-bold">{heading}</h1>
                <p className="p-4 text-[#f5f2f0] opacity-80">{paragraph}</p>
            </div>
            <div className="w-full h-full rounded-lg overflow-hidden">
                <Image className="w-full h-full object-cover" src={image} alt='image testimonails image' />
            </div>
        </div>
    )
}

export default FeatureTestimonials