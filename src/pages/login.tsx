import Image from "next/image";
import hero from '@/images/loginHero.webp';
import googleLogo from '@/images/googleLogo.png';
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../../store/nextSlice";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const userInfo = useSelector((state: StateProps) => state.next)
    const dispatch = useDispatch()


    const handleSignIn = () => {
        signIn();
        router.push('/')
        
    }



    useEffect(() => {
        if (userInfo.userInfo) {
            router.push('/')
        }
        if (session) {
            dispatch(addUser({
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image
            }
            ))
        }
    }, [session, userInfo.userInfo])

    return (
        <div className="w-full min-h-screen relative">
            <Image priority className="w-full h-screen object-cover absolute left-0 top-0 z-[-2]" src={hero} alt='login Hero image' />
            <div className="w-full h-full bg-[#171a1f] absolute left-0 top-0 z-[-1] opacity-40"></div>
            <div className="w-full h-full bg-[#171a1f] absolute left-0 top-0 z-[-3]"></div>
            <div className="p-4 flex flex-col lg:flex-row justify-between">
                <h1 className="lg:px-10 text-4xl lg:text-6xl lg:leading-[4.5rem] font-bold text-[#f5f2f0] flex items-center">Unlock <br /> the full NOLAN Experience</h1>
                <div className="my-4 p-4 bg-[#171a1f]  rounded-2xl flex flex-col items-center">
                    <p className="text-2xl text-[#f5f2f0] text-center">LOG IN</p>
                    <button onClick={handleSignIn} className="my-4 px-4 py-4 w-full bg-[#f4f4f7] rounded-3xl font-bold">
                        <Image className="mx-4 inline-block w-[1rem] h-[1rem]" src={googleLogo} alt='' />
                        Continue with Google
                    </button>
                    <p className="p-4 text-sm text-[#f5f2f0]">By signing up, you agree to the <Link className="text-[#1d6ee3]" href='/terms'>Terms of Service</Link> and <Link className="text-[#1d6ee3]" href='/privacy'>Privacy Policy</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login