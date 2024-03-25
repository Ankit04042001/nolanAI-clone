import BottomHeader from '@/components/BottomHeader'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const userInfo = useSelector((state: StateProps) => state.next)
    const router = useRouter()

    useEffect(() => {
        if (!userInfo.userInfo) {
            router.push('/')
        }
    }, [])

    return (
    <>
    <BottomHeader script={false} profile={true}/>
    <div className='w-full min-h-screen flex justify-center items-center bg-[#2b2d33] text-[#f5f2f0]'>
        <p>This is Profile page</p>
    </div>
    </>
  )
}

export default Profile