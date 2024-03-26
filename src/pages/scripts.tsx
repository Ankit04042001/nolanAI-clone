import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import BottomHeader from '@/components/BottomHeader'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Scripts = () => {
    const initialData = [{
        id: '',
        title: '',
        script: '',
        scriptType: '',
        about: '',
        platform: '',
        genre: '',
        synopsis: ''
    }]
    const [scriptData, setScriptData] = useState(initialData)
    const userInfo = useSelector((state:StateProps)=> state.next);
    const router = useRouter()

    useEffect(() => {
        if(!userInfo.userInfo){
            router.push('/')
        }
        const data = JSON.parse(localStorage.getItem('scripts')!);
        setScriptData(data)
    }, [])
    return (
        <>
            <BottomHeader script={true} profile={false}/>
            <div className='pt-10 p-2 w-full min-h-screen bg-[#2b2d33]'>
                <h1 className='p-4 text-5xl text-[#f5f2f0] font-bold'>Script Lists</h1>
                <table className='mt-10 w-full h-fit bg-[#dde0eb] rounded-xl table-fixed text-center'>
                    <thead className=''>
                        <tr className='border border-[1px] border-[#000]'>
                            <th className='p-2 border border-[1px] border-[#000]'>Id</th>
                            <th className='p-2 border border-[1px] border-[#000]'>Title</th>
                            <th className='p-2 border border-[1px] border-[#000]'>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scriptData?.map((item: scriptProps) => {
                                return <tr key={item.id} className='border border-[1px] border-[#000]'>
                                    <td className='p-2 border border-[1px] border-[#000] text-[#1d6ee3] truncate'><Link href={'/scripts/' + item.id}>{item.id}</Link></td>
                                    <td className='p-2 border border-[1px] border-[#000]'>{item.title}</td>
                                    <td className='p-2 border border-[1px] border-[#000]'>{item.scriptType}</td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Scripts