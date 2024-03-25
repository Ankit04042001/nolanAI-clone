import Link from "next/link"

interface Props {
    url:string,
    avtar: JSX.Element,
    avtarColor: string,
    heading: string,
    paragraph: string
}

const Feature = ({ url, avtar, avtarColor, heading, paragraph }: Props) => {
    return (
        <Link href={url}>
            <div className=" p-4 flex flex-row">
                <div className="px-5 py-10 bg-[#2b2d33] text-[#f5f2f0] flex rounded-2xl relative top-[-50px]">
                    <div className={`w-fit h-fit mr-4 p-4 text-2xl  rounded-full`} style={{ backgroundColor : avtarColor}}>
                        {avtar}
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">{heading}</h1>
                        <p className="mt-2 text-sm font-semibold opacity-60">{paragraph}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Feature