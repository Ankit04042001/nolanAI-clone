import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export const ComponentLoading = () => {
    return (
        <div className="w-full h-screen fixed top-0 left-0  bg-black z-[100000] opacity-80">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[50px] h-[50px]  rounded-full border border-[2px] border-white border-t-0 animate-spin"></div>
            </div>
        </div>
    )
}

export default ComponentLoading