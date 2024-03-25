import Image from 'next/image';
import heroForStudio from '@/images/hero-img-for-studios.webp';
import book from '@/images/book.webp';
import Feature from '@/components/home/Feature';
import { MdOutlineAnalytics, MdOutlinePsychology, MdOutlineWavingHand } from 'react-icons/md';

const Studios = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <section className='w-full h-[60vh] flex flex-col justify-center'>
        <Image className='w-full h-[60vh] absolute left-0 top-0 object-cover z-[-1]' priority src={heroForStudio} alt='hero image for studio page' />
        <div className='w-full h-full bg-[#222429] opacity-60 absolute left-0 top-0 z-[-1]'></div>
        <h1 className='p-4 text-4xl font-bold text-[#f6f6f6]'>For Film And Entertainment Production Companies</h1>
        <p className='p-4 text-[#f6f6f6]'>All in one software for small </p>
      </section>
      <section className='bg-[#222429] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Feature
          url='/feature'
          avtar={<MdOutlinePsychology />}
          avtarColor='#da8813'
          heading='All-in-one Editor'
          paragraph='Experience the future of script editing with our AI-powered co-pilot. Enhance your creative projects with intelligent assistance that simplifies the editing process, making it faster and more precise.'
        />
        <Feature
          url='/feature'
          avtar={<MdOutlineAnalytics />}
          avtarColor='#da8813'
          heading='Analytics & Pre-Production Management'
          paragraph='Streamline your pre-production process with comprehensive analytics. Make data-driven decisions, plan your projects effectively, and ensure every element of your production is optimized for success.'
        />
        <Feature
          url='/feature'
          avtar={<MdOutlineWavingHand />}
          avtarColor='#da8813'
          heading='Customization & Integration'
          paragraph="Tailor NolanAI to suit your studio's unique needs. Our platform offers seamless integration with industry-standard tools, ensuring that it fits perfectly into your existing workflow."
        />
      </section>
      <section className='bg-[#222429] grid grid-cols-1 lg:grid-cols-3'>
        <div className='mb-6 w-full flex justify-center '>
          <div className='p-[20px] w-[280px] h-[280px] rounded-full border-[1px] border-gray-700'>
            <div className='p-[20px] w-[240px] h-[240px] rounded-full border-[1px] border-gray-700'>
              <div className='w-[200px] h-[200px] rounded-full border-[1px] border-gray-700'>
                <Image src={book} alt='book image' />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:py-8 col-span-2 text-[#f5f2f0]'>
          <h1 className='my-4 text-5xl text-center lg:text-left font-bold'>Library of 2000+ Stories</h1>
          <p className='text-2xl text-center lg:text-left'>Access a vast collection of unique sttoories with full copyright transfer ffor further development. Unlock a wealth of creative possibilities and seamlesssly transform your next blockbuster screenplay from these stories.</p>
        </div>
      </section>
      <div className='py-20 lg:pt-0 md:px-40 lg:px-80 w-full h-fit bg-[#222429] text-[#f5f2f0]'>
        <p className='p-4 text-lg'>
          If you are looking for a way to implement creativity and unique storytelling with just a few clicks, then look no further than NolanAI. Unlock efficiency for your team in an instant. Join NolanAI Enterprice. <br />
          For more details, contact us.
          <a className='my-10 block text-2xl text-[#da8813] font-bold text-center' href='mailto: akushwa070@gmail.com'>enterprise@nolanai.app</a>
        </p>
      </div>

    </div>
  )
}

export default Studios