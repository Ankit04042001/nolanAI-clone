import logo from '@/images//logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='p-4 lg:p-10 bg-[#222429] flex flex-col items-center lg:flex-row lg:justify-around'>
            <div className='w-20 mb-6'>
                <Image className='w-full object-cover' src={logo} alt='logo Image' />
            </div>
            <div className=' mb-6 text-[#f5f2f0] text-center font-semibold opacity-80'>
                <p>&copy; NolanAI, Inc. 2024</p>
                <p className=''>
                    <Link href='/privacy'>Privacy Policy</Link>
                    <span className='mx-2 inline-block h-[20px] w-[2px] bg-[#f5f2f0] relative top-[5px]'></span>
                    <Link href='/terms'>Term of Service</Link>
                    <span className='mx-2 inline-block h-[20px] w-[2px] bg-[#f5f2f0] relative top-[5px]'></span>
                    <Link href='/referral'>Referral</Link>
                </p>
                <p>
                    <Link href='/referral'>Program</Link>
                    <span className='mx-2 inline-block h-[20px] w-[2px] bg-[#f5f2f0] relative top-[5px]'></span>
                    <Link href='/'>Releases</Link>
                    <span className='mx-2 inline-block h-[20px] w-[2px] bg-[#f5f2f0] relative top-[5px]'></span>
                    <Link href='/notImplemented'>Help</Link>
                </p>
            </div>
            <div className='flex flex-row text-3xl text-[#f5f2f0]'>
                <Link className='mx-2' href='/'><FaInstagram /></Link>
                <Link className='mx-2' href='/'><FaXTwitter /></Link>
                <Link className='mx-2' href='/'><AiOutlineYoutube /></Link>
                <Link className='mx-2' href='/'><FaThreads /></Link>
            </div>
        </div>
    )
}

export default Footer