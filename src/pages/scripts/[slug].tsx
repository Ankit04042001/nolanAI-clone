import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
  const initialData = {
    id: '',
    title: '',
    script: '',
    scriptType: '',
    about: '',
    platform: '',
    genre: '',
    synopsis: ''
  }
  const [script, setScript] = useState(initialData);
  const router = useRouter()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('scripts')!);
    if (router.isReady) {
      setScript(data.find((script: any) => script.id === router.query.slug))
    }
  }, [router.isReady, router.query.slug])
  return <div className='w-full min-h-screen bg-[#2b2d33] text-[#f5f2f0]'>
    <h1 className='py-10 text-5xl text-center'>{script.title}</h1>
    <p className='text-xl font-semibol text-center'>Script Type : {script.scriptType}</p>
    <p className='py-10 p-4 whitespace-pre-line'>{script.script}</p>
  </div>
}