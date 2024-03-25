import { signOut } from "next-auth/react"
import Link from "next/link"
import { TfiUpload } from "react-icons/tfi"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../store/nextSlice"
import { useRouter } from "next/router"

interface Props {
    script: boolean,
    profile: boolean
}

const BottomHeader = ({ script, profile }: Props) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const handleSignOut = () => {
        signOut();
        dispatch(removeUser())
        router.push('/')
    }



    return (
        <div className='w-full h-fit bg-[#2b2d33]'>
            <div className='p-4 w-full h-fit flex justify-between'>
                {
                    !script && (
                        <div className="px-4 py-2 text-[#1d6ee3] font-bold bg-[#dde0eb] rounded-3xl">
                            <Link href='/scripts'>My Scripts</Link>
                        </div>
                    )
                }
                <div className="flex items-center ">
                    {
                        !profile && (
                            <Link className="px-4 py-2 mr-6 inline-block text-[#1d6ee3] font-bold bg-[#dde0eb] rounded-3xl" href='/profile'>Profile</Link>
                        )
                    }
                    <button className="px-4 py-2 text-[#1d6ee3] font-bold bg-[#dde0eb] rounded-3xl" onClick={handleSignOut} type='button'>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader