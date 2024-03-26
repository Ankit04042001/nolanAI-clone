import Link from "next/link"
import { CgMenu } from "react-icons/cg";
import { FormEvent, useState } from "react";
import logo from '@/images/logo.png';
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSelector } from "react-redux";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import ComponentLoading from "./Loading";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import axios from "axios";

const Header = () => {
  const [hideMenu, setHideMenu] = useState(true)
  const userInfo = useSelector((state: StateProps) => state.next)
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [selectedFeatureType, setSelectedFeaturetype] = useState('featureFilm')
  const [featureFilmTitle, setFeatureFilmTitle] = useState('Untitled Screenplay')
  const [isFeatureTitleActive, setIsFeatureTitleActive] = useState(false)
  const [synopsis, setSynopsis] = useState('')
  const [isSynopsisActive, setIsSynopsisActive] = useState(false)
  const [genre, setGenre] = useState('')
  const [videoScriptTitle, setVideoScriptTitle] = useState('Untitled Screenplay')
  const [isVideoScriptTitleActive, setVideoScriptTitleActive] = useState(false)
  const [videoScriptAbout, setVideoScriptAbout] = useState('')
  const [isVideoScriptAboutActive, setVideoScriptAboutActive] = useState(false)
  const [platform, setPlatform] = useState('')
  const [isNextModalPage, setIsNextModalPage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()



  const handleHideMenu = () => {
    if (hideMenu === true) {
      setHideMenu(false)
    } else {
      setHideMenu(true)
    }
  }

  const handleFeatureTypeChange = (value: string) => {
    setSelectedFeaturetype(value)
  }

  const fetchData = async () => {
    
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/gemini`,
      {
        selectedFeatureType: selectedFeatureType,
        featureFilmTitle : featureFilmTitle,
        genre : genre,
        synopsis: synopsis
      }
      )
      return result.data.text;
  }

  const handleFeatureSubmit = async (e: FormEvent) => {
    setIsActiveModal(false);
    setIsLoading(true);
    e.preventDefault()
    const result = await fetchData()
    setIsLoading(false)
    let data = []
    const scriptId = nanoid()
    if (localStorage.getItem('scripts')) {
      let scripts = JSON.parse(localStorage.getItem('scripts')!)
      scripts.map((item: scriptProps) => {
        data.push(item)
      })
    }
    data.push({
      id: scriptId,
      scriptType: 'Feature Film',
      title: featureFilmTitle,
      synopsis: synopsis,
      genre: genre,
      script: result
    })
    localStorage.setItem('scripts', JSON.stringify(data))

    router.push('/scripts/' + scriptId)
  }

  const handleVideoSubmit = async (e: FormEvent) => {
    setIsActiveModal(false);
    setIsLoading(true);
    e.preventDefault()
    const result = await fetchData()
    setIsLoading(false)
    let data = []
    const scriptId = nanoid()
    if (localStorage.getItem('scripts')) {
      let scripts = JSON.parse(localStorage.getItem('scripts')!)
      scripts.map((item: scriptProps) => {
        data.push(item)
      })
    }
    data.push({
      id: scriptId,
      scriptType: 'Video Short',
      title: videoScriptTitle,
      about: videoScriptAbout,
      platform: platform,
      script: result
    })
    localStorage.setItem('scripts', JSON.stringify(data))

    router.push('/scripts/' + scriptId)
  }


  return (
    <div className="relative">
      {
        isLoading && (
          <ComponentLoading />
        )
      }
      <div onClick={() => hideMenu === false && setHideMenu(true)} className='w-full flex align-center justify-between sticky top-0 left-0 z-[5000] bg-[#222429] p-4 text-[#f5f2f0]'>
        <div>
          <div onClick={handleHideMenu} className="p-2 inline-flex lg:hidden items-center justify-center"><button className="text-2xl"><CgMenu /></button></div>
          <Link className="inline-flex justify-center items-center" href='/'>
            <Image className='inline-block h-[30px] w-auto' src={logo} alt='logo image' />
          </Link>
        </div>
        <div className="">
          {
            userInfo.userInfo && (
              <Link className="px-4 hidden lg:inline-block" href='/dashboard'>Dashboard</Link>
            )
          }
          <Link className="px-4 hidden lg:inline-block" href='/about'>About Us</Link>
          <Link className="px-4 hidden lg:inline-block" href='/price'>Pricing</Link>
          <Link className="px-4 hidden lg:inline-block" href='/studios'>For Studios</Link>
          <Link className="px-4 hidden lg:inline-block" href='/features'>Features</Link>
          <button onClick={() => setIsActiveModal(true)} className="px-4 hidden lg:inline-block">Create Script</button>
          <Link className="px-4 hidden lg:inline-block" href='/blog'>Blog</Link>
          {
            userInfo.userInfo ? (
              <Link href='/profile'><Image className='inline-block rounded-full' src={userInfo.userInfo.image} width={40} height={40} alt='user Image' /></Link>
            ) :
              <Link className="ms-4 px-4 py-2 bg-white text-black text-sm font-semibold rounded-[20px]" href='/login'>Log in</Link>
          }
        </div>


        {/* mobile navigation bar */}

        <div className={`w-full h-[100vh] ${hideMenu ? 'hidden' : 'block'} fixed left-0 top-[64px]`}>
          <div className='flex flex-col bg-[#222429] text-[#f5f2f0] rounded-[5px]'>
            {
              userInfo.userInfo && (
                <Link className="p-4 border-t-[1px] border-t-black" href='/dashboard'>Dashboard</Link>
              )
            }
            <Link className="p-4 border-t-[1px] border-t-black" href='/about'>About Us</Link>
            <Link className="p-4 border-t-[1px] border-t-black" href='/price'>Pricing</Link>
            <Link className="p-4 border-t-[1px] border-t-black" href='/studios'>For Studios</Link>
            <Link className="p-4 border-t-[1px] border-t-black" href='/features'>Features</Link>
            <button onClick={() => setIsActiveModal(true)} className="p-4 border-t-[1px] border-t-black text-left">Create Script</button>
            <Link className="p-4 border-t-[1px] border-t-black" href='/blog'>Blog</Link>
          </div>
        </div>
      </div>


      {/* Modal section */}

      <div className={`${!isActiveModal && 'hidden'} w-full h-full fixed top-0 left-0 z-[49990] bg-[#000] opacity-40`}></div>
      <div className={`p-2 ${!isActiveModal && 'hidden'} w-full h-full fixed top-0 left-0 z-[50000] flex justify-center items-center`}>
        <div className="w-full md:w-[80%] lg:w-[40%] bg-[#e9ebf2] text-[#000] rounded-xl">

          {/* feature type selection form */}
          <form className={`${isNextModalPage && 'hidden'}`}>
            <div className="py-2 px-4 flex justify-between  border-b-[1px] border-b-slate-300">
              <h1 className="text-lg font-bold">Create a new script</h1>
              <div onClick={() => setIsActiveModal(false)} className="p-2 text-[#1d6ee3] bg-[#d1dbf1] rounded-full cursor-pointer "><FaTimes /></div>
            </div>

            {/*  Body */}
            <div className='px-4'>
              <p className="pt-6 pb-4 text-lg">Select the format you want to write a script for:</p>
              <div className="border border-[1px] border-slate-400 rounded-lg">
                <label className="p-4 px-6 block font-bold cursor-pointer flex flex-row items-start" htmlFor='featureFilm'>
                  <input className="inline-block mt-2 mr-2" type="radio" id='featureFilm' name='scriptFormat' value='featureFilm' checked={selectedFeatureType === 'featureFilm'} onChange={() => handleFeatureTypeChange('featureFilm')} />
                  <div className="inline-block">
                    Feature Film
                    <span className="block text-sm font-medium opacity-80">Being crafting your feature film screenplay with  the assistance of Co-Pilot&apos;s power.</span>
                  </div>
                </label>
              </div>
              <div className="my-4 border border-[1px] border-slate-400 rounded-lg group flex justify-between items-start">
                <label className="p-4 px-6 block font-bold cursor-pointer flex flex-row items-start group-checked:bg-black " htmlFor='videoShort'>
                  <input className="inline-block mt-2 mr-2 peer" type="radio" id='videoShort' name='scriptFormat' value='videoShort' checked={selectedFeatureType === 'videoShort'} onChange={() => handleFeatureTypeChange('videoShort')} />
                  <div className=" ">
                    Video Short
                    <span className="block text-sm font-medium opacity-80">Take your video shorts to new heights by utilizing AI to craft your scripts in screenplay format.</span>
                  </div>
                </label>
              </div>
            </div>
            {/* footer */}
            <div className="p-4 flex justify-between border border-t-1px border-slate-300 rounded-xl">
              <button type="button" onClick={() => setIsActiveModal(false)} className="px-4 py-2 text-[#1d6ee3] bg-[#d1dbf1] font-bold rounded-3xl">Cancel</button>
              <button onClick={() => setIsNextModalPage(true)} type="button" className="px-4 py-2 text-[#f5f2f0] bg-[#d1dbf1] hover:bg-[#1d6ee3] font-bold rounded-3xl">Next <span className="inline-block"><FaArrowRight /></span></button>
            </div>
          </form>


          {/* Feature Film Form */}

          <form className={`${(isNextModalPage && selectedFeatureType === 'featureFilm') ? 'block' : 'hidden'}`} method="post" onSubmit={(e: FormEvent) => handleFeatureSubmit(e)}>
            <div className="py-2 px-4 flex justify-between  border-b-[1px] border-b-slate-300">
              <h1 className="text-lg font-bold">Create a new script</h1>
              <div onClick={() => setIsActiveModal(false)} className="p-2 text-[#1d6ee3] bg-[#d1dbf1] rounded-full cursor-pointer "><FaTimes /></div>
            </div>
            {/*  Body */}
            <div >
              <div className="m-2 border border-[1px] border-gray-400 rounded-xl group">
                <label className={`px-4 pt-2 w-full block title ${(featureFilmTitle === '' && !isFeatureTitleActive) ? 'text-[1rem]' : 'text-[.5rem]'}`} htmlFor='title'>Title</label>
                <input onFocus={() => setIsFeatureTitleActive(true)} onBlur={() => setIsFeatureTitleActive(false)} onChange={(e) => setFeatureFilmTitle(e.target.value)} className={`px-4 pb-2 w-full block outline-none bg-[#e9ebf2] ${featureFilmTitle === '' && '[&:not(:focus)]:text-[0.5rem]'} rounded-xl`} type="text" name='title' id='title' value={featureFilmTitle} required />
              </div>
              <div className="m-2  border border-[1px] border-gray-400 rounded-xl group">
                <label className={`px-4 pt-2 w-full block title ${(synopsis === '' && !isSynopsisActive) ? 'text-base' : 'text-[.5rem]'}`} htmlFor='synopsis'>Synopsis</label>
                <input onFocus={() => setIsSynopsisActive(true)} onBlur={() => setIsSynopsisActive(false)} onChange={(e) => setSynopsis(e.target.value)} className={`px-4 pb-2 w-full block outline-none bg-[#e9ebf2] ${synopsis === '' && '[&:not(:focus)]:text-[0.5rem]'} rounded-xl`} type="text" name='synopsis' id='synopsis' required />
              </div>
              <div className="m-2 p-4 border border-[1px] border-gray-400 rounded-xl group">
                <select onChange={(e) => setGenre(e.target.value)} id='genre' className="w-full bg-[#e9ebf2] outline-none" required>
                  <option value='' defaultValue=''>-- Select Genre --</option>
                  <option value='action'>Action</option>
                  <option value='adventure'>Adventure</option>
                  <option value='comedy'>Comedy</option>
                  <option value='detective'>Detective/Noir</option>
                  <option value='drama'>Drama</option>
                  <option value='fantasy'>Fantasy</option>
                  <option value='horror'>Horror</option>
                  <option value='history'>History</option>
                  <option value='mystery'>Mystery</option>
                  <option value='romance'>Romance</option>
                  <option value='thriller'>Thriller</option>
                  <option value='western'>Western</option>
                  <option value='sci-fi'>Sci-Fi</option>
                </select>
              </div>
            </div>

            {/* footer */}
            <div className="p-4 flex justify-between border border-t-1px border-slate-300 rounded-xl">
              <button type="button" onClick={() => setIsActiveModal(false)} className="px-4 py-2 text-[#1d6ee3] bg-[#d1dbf1] font-bold rounded-3xl">Cancel</button>
              <div>
                <button type="button" onClick={() => setIsNextModalPage(false)} className="px-4 py-2 text-[#f5f2f0] bg-[#d1dbf1] hover:bg-[#1d6ee3] font-bold rounded-3xl">Back</button>
                {
                  userInfo.userInfo ? (

                <button type="submit" className="ml-2 px-4 py-2 text-[#f5f2f0] bg-[#1d6ee3] hover:bg-[#1d6ee3] font-bold rounded-3xl">
                  Submit
                  <div className="ml-1 inline-flex items-center relative top-[2px]">
                    <TbArrowBadgeRightFilled />
                  </div>
                </button>
                  ):(
                    <Link onClick={()=>setIsActiveModal(false)} href='/login' className="ml-2 px-4 py-2 text-[#f5f2f0] bg-[#1d6ee3] hover:bg-[#1d6ee3] font-bold rounded-3xl">Login First</Link>
                  )
                }
              </div>
            </div>
          </form>

          {/* Video Short Form */}

          <form className={`${(isNextModalPage && selectedFeatureType === 'videoShort') ? 'block' : 'hidden'}`} method="post" onSubmit={(e: FormEvent) => handleVideoSubmit(e)}>
            <div className="py-2 px-4 flex justify-between  border-b-[1px] border-b-slate-300">
              <h1 className="text-lg font-bold">Create a new script</h1>
              <div onClick={() => setIsActiveModal(false)} className="p-2 text-[#1d6ee3] bg-[#d1dbf1] rounded-full cursor-pointer "><FaTimes /></div>
            </div>

            {/* Body */}
            <div>
              <div className="m-2 border border-[1px] border-gray-400 rounded-xl group">
                <label className={`px-4 pt-2 w-full block title ${(videoScriptTitle === '' && !isVideoScriptTitleActive) ? 'text-[1rem]' : 'text-[.5rem]'}`} htmlFor='videoTitle'>Title</label>
                <input onFocus={() => setVideoScriptTitleActive(true)} onBlur={() => setVideoScriptTitleActive(false)} onChange={(e) => setVideoScriptTitle(e.target.value)} className={`px-4 pb-2 w-full block outline-none bg-[#e9ebf2] ${videoScriptTitle === '' && '[&:not(:focus)]:text-[0.5rem]'} rounded-xl`} type="text" name='videoTitle' id='videoTitle' value={videoScriptTitle} required />
              </div>
              <div className="m-2  border border-[1px] border-gray-400 rounded-xl group">
                <label className={`px-4 pt-2 w-full block title ${(videoScriptAbout === '' && !isVideoScriptAboutActive) ? 'text-base' : 'text-[.5rem]'}`} htmlFor='scriptAbout'>Write a video script about:</label>
                <input onFocus={() => setVideoScriptAboutActive(true)} onBlur={() => setVideoScriptAboutActive(false)} onChange={(e) => setVideoScriptAbout(e.target.value)} className={`px-4 pb-2 w-full block outline-none bg-[#e9ebf2] ${videoScriptAbout === '' && '[&:not(:focus)]:text-[0.5rem]'} rounded-xl`} type="text" name='scriptAbout' id='scriptAbout' required />
              </div>
              <div className="m-2 p-4 border border-[1px] border-gray-400 rounded-xl group">
                <select onChange={(e) => setPlatform(e.target.value)} id='platform' className="w-full bg-[#e9ebf2] outline-none" required>
                  <option value='' defaultValue=''>-- Select Social Medial Platform --</option>
                  <option value='tik-tok'>Tik Tok</option>
                  <option value='instagram'>Instagram Reel</option>
                </select>
              </div>
            </div>

            {/*footer */}
            <div className="p-4 flex justify-between border border-t-1px border-slate-300 rounded-xl">
              <button type="button" onClick={() => setIsActiveModal(false)} className="px-4 py-2 text-[#1d6ee3] bg-[#d1dbf1] font-bold rounded-3xl">Cancel</button>
              <div>
                <div>
                  <button type="button" onClick={() => setIsNextModalPage(false)} className="px-4 py-2 text-[#f5f2f0] bg-[#d1dbf1] hover:bg-[#1d6ee3] font-bold rounded-3xl">Back</button>
                  {
                    userInfo.userInfo ? (
                      <button type="submit" className="ml-2 px-4 py-2 text-[#f5f2f0] bg-[#1d6ee3] hover:bg-[#1d6ee3] font-bold rounded-3xl">
                        Submit
                        <div className="ml-1 inline-flex items-center relative top-[2px]">
                          <TbArrowBadgeRightFilled />
                        </div>
                      </button>
                    ) : (
                      <Link onClick={()=>setIsActiveModal(false)} href='/login' className="ml-2 px-4 py-2 text-[#f5f2f0] bg-[#1d6ee3] hover:bg-[#1d6ee3] font-bold rounded-3xl">Login First</Link>                    
                    )
                  }
                </div>
              </div>
            </div>
          </form>



        </div>
      </div >

      <div className={`${!isActiveModal && 'hidden'} w-full h-full fixed top-0 left-0 z-[49990] bg-[#000] opacity-40`}>

      </div>
    </div >


  )
}

export default Header