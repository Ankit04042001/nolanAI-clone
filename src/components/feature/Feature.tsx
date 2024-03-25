import Link from "next/link"

interface Props {
    url: string,
    avtar: JSX.Element,
    avtarColor: string,
    heading: string,
    paragraph: string
}

const Feature = ({ url, avtar, avtarColor, heading, paragraph }: Props) => {
    return (
        <Link className="p-2 lg:p-4" href={url}>
            <div className="p-2 w-full h-[350px] lg:h-[300px] bg-[#2b2d33] text-[#f5f2f0] rounded-2xl relative top-[-50px]">
                <div className="flex flex-row ">
                    <div className="px-5 py-10  flex  ">
                        <div className={`w-fit h-fit mr-4 p-4 text-2xl  rounded-full`} style={{ backgroundColor: avtarColor }}>
                            {avtar}
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">{heading}</h1>
                            <p className="mt-2 text-sm font-semibold opacity-60">{paragraph}</p>
                        </div>
                    </div>
                </div>
                <p className="px-4 text-sm font-semibold opacity-60 absolute bottom-4">Explor feature</p>
            </div>
        </Link>
    )
}

export default Feature