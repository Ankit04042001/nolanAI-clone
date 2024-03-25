import BottomHeader from '@/components/BottomHeader'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { AiFillDollarCircle } from 'react-icons/ai'
import { MdBallot, MdOndemandVideo, MdOutlineBallot } from 'react-icons/md'

const Dashboard = () => {
    const userInfo = useSelector((state: StateProps) => state.next)
    const router = useRouter()

    useEffect(() => {
        if (!userInfo.userInfo) {
            router.push('/')
        }
    }, [])
    return (<>
        <BottomHeader script={false} profile={false}/>
        <div className='pt-10 p-2 w-full min-h-screen bg-[#2b2d33]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='p-4 flex bg-[#dde0eb] rounded-lg'>
                    <div className='px-2 text-6xl text-[#83c619]'><AiFillDollarCircle /></div>
                    <div className='px-2'>
                        <h1 className='font-bold'>Referral Program</h1>
                        <p>Join Our Referral Program and Start Earning Today!</p>
                        <Link className='mt-4 ml-[-5px] px-4 py-2 w-fit text-[#1d6ee3] bg-[#c6d2ea] flex items-center rounded-3xl font-semibold    ' href='/referral'>Learn More <div className='ml-2 inline-block'><IoIosArrowRoundForward /></div></Link>
                    </div>
                </div>
                <div className='p-4 flex bg-[#dde0eb] rounded-lg'>
                    <div className='px-2 text-4xl '>
                        <div className='p-3 bg-[#ea9e2b] text-[#dde0eb] rounded-full'>
                            <MdOndemandVideo />
                        </div>
                    </div>
                    <div className='px-2'>
                        <h1 className='font-bold'>Video Tutorials</h1>
                        <p>Learn how to utilize NolanAI features.</p>
                        <a className='mt-4 ml-[-5px] px-4 py-2 w-fit text-[#1d6ee3] bg-[#c6d2ea] flex items-center rounded-3xl font-semibold' href='https://www.youtube.com/@NolanAi/videos'>Learn More <div className='ml-2 inline-block'><IoIosArrowRoundForward /></div></a>
                    </div>
                </div>
                <div className='p-4 flex bg-[#dde0eb] rounded-lg'>
                    <div className='px-2 text-4xl '>
                        <div className='p-3 bg-[#83c619] text-[#dde0eb] rounded-full'>
                            <MdOutlineBallot />
                        </div>
                    </div>
                    <div className='px-2'>
                        <h1 className='font-bold'>Lights, Camera, Feedback!</h1>
                        <p>Help us make NolanAI even better!</p>
                        <a className='mt-4 ml-[-5px] px-4 py-2 w-fit text-[#1d6ee3] bg-[#c6d2ea] flex items-center rounded-3xl font-semibold' href='https://docs.google.com/forms/d/e/1FAIpQLSdziO0TN5NO2NVR6qHp-zKTXAbJfXGzfqQQGKN4xkwA_nOpXQ/viewform'>Learn More <div className='ml-2 inline-block'><IoIosArrowRoundForward /></div></a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Dashboard