import { MdDeveloperBoard, MdEdit, MdExplore, MdLogin, MdOutlineAutoAwesome, MdOutlineFormatAlignCenter, MdSummarize } from 'react-icons/md';
import hero from '../images/hero.png';
import Image from 'next/image';
import Feature from '@/components/home/Feature'
import { FaArrowRight, FaRegListAlt, FaSearchengin } from 'react-icons/fa';
import secure from '@/images/image.webp';
import logo from '@/images/logo.png';
import Link from 'next/link';
import heroImageLandingVid from '@/images/heroImgLanding.webp'
import vid from '@/images/vid.webp';
import mike_wech from '@/images/mike_wech.webp'
import { HiUsers } from 'react-icons/hi';
import FeatureTestimonials from '@/components/home/FeatureTestimonials';
import img1 from '@/images/1.webp';
import plotHole from '@/images/plotHole.webp';
import img3 from '@/images/3.webp';
import img4 from '@/images/4.webp';
import img5 from '@/images/5.webp';
import scriptBreakdown from '@/images/scriptBreakdown.webp';
import { FiEdit3 } from 'react-icons/fi';
import { IoMdBulb } from 'react-icons/io';
import { IoLanguage } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Home = () => {
  const userInfo = useSelector((state:StateProps) => state.next)
  return (
    <>
      <section className="w-full min-h-[100vh] flex items-center">
        <div className='w-full h-[110vh] absolute left-0 top-0 z-[-1]'>
          <Image priority className='h-full object-cover' src={hero} alt='hero-section image' />
        </div>
        <div className='ps-3 md:ps-10 text-[#f5f2f0]'>
          <div className='mt-6 mb-4 '>
            <Image priority className='w-[50%]' src={logo} alt='logo img' />
          </div>
          <h1 className='text-[48px] font-bold leading-[58px] tracking-wider'>Film Industry Service Hub</h1>
          <p className='mt-5 md:text-[1.5rem]'>Helping bring the next masterpiece of the big screens.</p>
          <div className='mt-6'>
            {
              !userInfo.userInfo?(
                <div className='flex'>
                  <Link className='p-4 flex items-center text-[#f5f2f0] font-bold bg-[#1d6ee3] rounded-[30px]' href='/login'><MdEdit /> <span className='ms-2'>Get NolanAI Free</span></Link>
                  <Link className='p-4 px-6 ms-2 flex items-center text-[#000] font-bold bg-[#f5f2f0] rounded-[30px]' href='/login'><MdLogin /> <span className='ms-2'>Login</span></Link>
                </div>
                ):
                <Link className='p-4 px-6 ms-2 w-fit flex items-center text-[#f5f2f0] font-bold bg-[#1d6ee3] rounded-[30px]' href='/dashboard'><MdEdit /> <span className='ms-2'>Go To Dashboard</span></Link>

            }
          </div>
        </div>
      </section>
      <section className='mt-[-10px] w-full bg-[#191b1f] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        <Feature
          url={'/'}
          avtar={<MdOutlineAutoAwesome />}
          avtarColor={'#83c619'}
          heading={'Editor with AI-Copilot'}
          paragraph={'Enhance your screenwriting experience with AI Copilot, which suggests ideas for you.'}
        />
        <Feature
          url={'/'}
          avtar={<FaRegListAlt />}
          avtarColor={'#1d6ee3'}
          heading={'Automatic Script Breakdown.'}
          paragraph={'Script breakdown can be accomplished with a single click.'}
        />
        <Feature
          url={'/'}
          avtar={<MdDeveloperBoard />}
          avtarColor={'#da8813'}
          heading={'AI Storyboard'}
          paragraph={'Automatically create shots by analyzing each scene within seconds. Generate shot images for inspiration.'}
        />
      </section>
      <section className='bg-[#191b1f] grid grid-cols-1 md:grid-cols-3'>
        <div className='flex justify-center items-center'>
          <div className='p-[25px] w-[310px] h-[310px] rounded-full border-gray-800 border-[1px] relative'>
            <div className='p-[20px] w-[260px] h-[260px] rounded-full border-gray-800 border-[1px]'>
              <div className='w-[220px] h-[220px] rounded-full border-gray-800 border-[1px]'>
                <div className='w-[300px] h-[300px] absolute left-[5px] top-[15px]'>
                  <Image priority className='w-[300px] h-[300px]' src={secure} alt='secure image' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 p-4 lg:p-20 text-[#f5f2f0] text-center md:text-left'>
          <h1 className='text-4xl font-bold opacity-80'>Secure</h1>
          <p className='mt-3 mb-3 text-2xl  '>Don&apos;t worry, your data is secure and encrypted with NOLAN</p>
          <p className='text-base opacity-60'>We take your privacy and the ownership of your work very seriously. We respect your creative content and have no rights over it. We do not use your work for training our models or for any other purposes without your explicit consent. Your scripts and content remain your intellectual property. So, when you create/upload or edit content using our software, you retain full ownership of the intellectual property. We do not claim any rights to your scripts or any other content you produce. Your creative work is yours and yours alone</p>
        </div>
      </section>
      <section className='relative grid grid-cols-1 lg:grid-cols-2 text-[#f5f2f0]'>
        <div className='w-full h-full absolute top-0 left-0 z-[-1]'>
          <Image priority className='w-full h-full object-cover' src={heroImageLandingVid} alt='hero image landing vid' />
        </div>
        <div className='p-4 lg:pl-[4rem] pt-[4rem]'>
          <h1 className='text-3xl lg:text-4xl font-medium'>Free Script Writing Software <span className='block my-4 text-4xl lg:text-6xl font-bold'>And More</span></h1>
          <p className='text-lg font-medium leading-8'>NolanAI isn&apos;t just a screenwriting tool, it&apos;s a filmmaker&apos;s dream studio. From crafting your script with AI assistance to seamlessly pre-producing your masterpiece, all within one intuitive platform, NolanAI empowers you to tell your story without losing your creative spark.
            Imagine ditching siloed tools and having everything at your fingertips, from storyboards to shot lists, all fueled by AI smarts and user-friendly design. That&apos;s the NolanAI advantage - streamlined storytelling, from pen to production, with your unique voice always in the director&apos;s chair.</p>
          <div className='mt-4 mb-8 px-4 py-2 w-fit flex items-center bg-[#1d6ee3] text-sm font-semibold rounded-[20px]'>
            <Link className='mr-4' href='/pricing'>Explore our premium plan! </Link>
            <span className=''><FaArrowRight /></span>
          </div>
        </div>
        <div className='p-5 flex justify-center items-center'>
          <div className='w-[400px] h-[250px]'>
            <Image priority className='w-full h-full object-cover rounded-xl' src={vid} alt='video image' />
          </div>
        </div>
      </section>
      <section className='pb-10 bg-[#191b1f]'>
        <h1 className='pt-8 text-3xl text-[#f5f2f0] font-bold text-center'>Testimonials</h1>
        <p className='pt-2 text-[#f5f2f0] opacity-50 text-center font-semibold'>What Our Customers Say</p>
        <div className='p-2 w-full flex justify-center'>
          <div className='p-2 w-full md:w-[50%] lg:w-[30%] bg-[#2b2d33] rounded-xl'>
            <div className='flex justify-center'>
              <div className='p-3 w-22 h-22 rounded-full border-slate-600 border-[1px] '>
                <Image priority className='w-16 h-16 object-cover rounded-full' src={mike_wech} alt='Mike Wech Image'></Image>
              </div>
            </div>
            <div className='mt-3 text-2xl text-[#f5f2f0] font-bold text-center'>Mike Wech</div>
            <div className='my-2 text-xs text-[#f5f2f0] font-medium text-center opacity-70'>PRODUCER<span className='mx-2 inline-block w-2 h-2 rounded-full bg-[#f5f2f0] opacity-70'></span>EDITOR<span className='mx-2 inline-block w-2 h-2 rounded-full bg-[#f5f2f0] opacity-70'></span>WRITER</div>
            <p className='p-4 text-[#f5f2f0]'>NolanAI has the ability to be a game changer for producers. What used to take days could soon take hours and the technology is constantly improving. I was happy that the developers were quick to address the issues and eager to learn how the program can become more efficient for producers. The incorporated new features that we asked for and are eager to help filmmakers streamline production. Highly recommended.</p>
          </div>
        </div>

        <h2 className='mt-20 px-2 text-[2.5rem] text-[#f5f2f0] font-bold text-center leading-[3rem]'>Meet Your Fellow Creators at NolanAI</h2>
        <p className='px-4 text-[1.5rem] text-[#f5f2f0] text-center opacity-70'>Fueling the creating Fire: Where Thousands Shape Their Stories</p>
        <div className='flex flex-col lg:flex-row justify-around'>
          <div className='mt-10 flex flex-col justify-center items-center'>
            <div className='p-4 outline outline-1 outline-[#f5f2f0]/10 rounded-full'>
              <div className='p-4 text-[#f5f2f0] text-xl outline outline-2 outline-[#f5f2f0]/30 bg-[#2b2d33] opacity-70 rounded-full'>
                <HiUsers />
              </div>
            </div>
            <div className='my-2 text-7xl font-bold text-[#e4931d]'>+10000</div>
            <div className='text-3xl text-[#f5f2f0]'>Registered users</div>
          </div>
          <div className='mt-10 flex flex-col justify-center items-center'>
            <div className='p-4 outline outline-1 outline-[#f5f2f0]/10 rounded-full'>
              <div className='p-4 text-[#f5f2f0] text-xl outline outline-2 outline-[#f5f2f0]/30 bg-[#2b2d33] opacity-70 rounded-full'>
                <MdDeveloperBoard />
                </div>
                </div>
            <div className='my-2 text-7xl font-bold text-[#e4931d]'>+3000</div>
            <div className='text-3xl text-[#f5f2f0]'>Storyboards created</div>
          </div>
          <div className='mt-10 flex flex-col justify-center items-center'>
            <div className='p-4 outline outline-1 outline-[#f5f2f0]/10 rounded-full'>
              <div className='p-4 text-[#f5f2f0] text-xl outline outline-2 outline-[#f5f2f0]/30 bg-[#2b2d33] opacity-70 rounded-full'>
                <MdSummarize />
                </div>
                </div>
            <div className='my-2 text-7xl font-bold text-[#e4931d]'>+18000</div>
            <div className='text-3xl text-[#f5f2f0]'>Scripts written</div>
          </div>
        </div>
      </section>
      <section className='p-4 bg-[#191b1f]'>
        <h1 className='text-4xl text-[#f5f2f0] font-bold text-center uppercase'>Feautures</h1>
        <p className='text-2xl text-[#f5f2f0] opacity-50 text-center'>Explore what the NolanAI platform can do</p>
        <FeatureTestimonials
          index={1}
          image={img1}
          icon={<FiEdit3 />}
          iconColor='#1364d9'
          heading='The Industry Standard Script Writing Software'
          paragraph='Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, revision tracking, and collaboration tools.With its powerful tools and intuitive design.'
        />
        <FeatureTestimonials
          index={2}
          image={plotHole}
          icon={<FaSearchengin />}
          iconColor='#b11e46'
          heading='Plot Hole Detection Report'
          paragraph="With the Plot Hole Detection Report, you can ensure the consistency and quality of your story, enhancing the overall engagement of your content. This detailed report provides actionable insights and suggestions for resolving identified issues, allowing you to fine-tune your narrative and captivate your audience with a more polished and immersive storytelling experience. Whether you're crafting a screenplay, novel, or any other form of narrative, this feature is your indispensable companion in the pursuit of storytelling excellence."
        />
        <FeatureTestimonials
          index={3}
          image={img3}
          icon={<IoMdBulb />}
          iconColor='#da8813'
          heading='Ask Nolan for suggestion'
          paragraph="To help you create high-quality story, Nolan offers a powerful editing feature. With Ask Nolan, you can easily enhance the quality of your text by highlighting the selected text,correcting any spelling and grammar errors, and adjusting the tone of the paragraph as necessary.This feature provides you with the flexibility to customize your text and make it more engaging and effective."
        />
        <FeatureTestimonials
          index={4}
          image={img4}
          icon={<IoLanguage />}
          iconColor='#83c619'
          heading='Change your character accent'
          paragraph={`Personalize your character and make it truly unique.
        "Change Accent" allows you to change your character's accent, making it sound more distinct and authentic.
        Whether you want to add a touch of personality to your character or create a character that stands out,
        this feature provides you with the flexibility to customize your character's accent to match your preferences.
        With this feature, you can create a character that truly represents you and brings your story to life.`}
        />
        <FeatureTestimonials
          index={5}
          image={img5}
          icon={<MdOutlineFormatAlignCenter />}
          iconColor='#d54927'
          heading='Script Smart'
          paragraph="Script Smart uses advanced algorithms to automatically format your text into a screenplay format. With Script Smart, you can save time and focus on writing by letting the software handle the formatting for you. This feature also provides suggestions and corrections to help ensure that your screenplay adheres toindustry standards and is formatted correctly."
        />
        <FeatureTestimonials
          index={6}
          image={scriptBreakdown}
          icon={<FaRegListAlt />}
          iconColor='#0650b9'
          heading='Break Smart'
          paragraph="The Automatic Screenplay Breakdown (Break Smart) is a time-saving solution that simplifies the process of deconstructing a screenplay. It automatically dissects your script into key elements like scenes, characters, and locations, providing a clear and organized overview of your story's structure."
        />
        <div className='w-full flex justify-center'> 
        <Link className='block my-5 p-2 px-4 w-fit text-[#f5f2f0] font-bold bg-[#1d6ee3] rounded-3xl' href={'/feature'}><span className='inline-flex items-center'><MdExplore /></span> Explore All Features</Link>
        </div>
      </section>
    </>
  )
}

export default Home