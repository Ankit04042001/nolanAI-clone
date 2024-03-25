import Link from "next/link"
import Image from "next/image"
import about from '@/images/about.webp'

const About = () => {
  return (
    <div className="pb-20 w-full min-h-screen text-[#f6f6f6] relative ">
      <Image priority className="w-full h-[80vh] absolute left-0 top-0 object-cover z-[-1]" src={about} alt='about hero image'/>
      <div className="w-full h-full bg-[#191b1f] absolute left-0 top-0 z-[-2]"></div>
      <h1 className="pt-[4rem] pl-[1rem] lg:pl-[4rem] text-[4rem] font-bold">About Us</h1>
      <div className="lg:mr-40 lg:pl-40 pt-20 pl-[1rem]">
        <h2 className="my-4 text-[2.5rem] font-bold">Our mission</h2>
        <p className=" text-xl font-md">Welcome to NolanAI, the AI-driven All in one tool for film industry professionals at any level. Our mission is to guide and empower you in crafting captivating screenplays while preserving your unique voice.</p>
        <h2 className="my-4 text-[2.5rem] font-bold">What is NolanAI?</h2>
        <p className=" text-xl font-md">
          NolanAi is the ultimate AI-driven All in one tool that can help screenwriters of all levels. It&apos;s designed to guide and assist you in bringing your stories to the screenplay industry format, without stealing your creativity.
          <br />
          <br />
          If you&apos;re new to the industry, NolanAI can be your co-pilot, helping you through the emotional and exhausting process of screenwriting.
          <br />
          <br />
          With its powerful algorithms and intuitive interface, it can offer suggestions and guidance on character development, plot points, and dialogue, helping you turn your ideas into polished screenplays.
          <br />
          <br />
          For experienced scriptwriters, NolanAI can bring new ideas and inspiration to your writing. It can suggest fresh angles, plot twists, and character arcs, helping you take your craft to the next level. And throughout the writing process, you&apos;re always in control.
          <br />
          <br />
          <span className="font-semibold">NolanAI is here to help, not to take over.</span>
        </p>

        <h2 className="my-4 text-[2.5rem] font-bold">For Novice Screenwriters:</h2>
        <p className=" text-xl font-md">If you&apos;re new to the industry, NolanAI is your trusted co-pilot on the exhilarating screenwriting journey. We understand the emotional and exhaustive nature of the process, which is why NolanAI is here to provide valuable suggestions and guidance. Our powerful algorithms and intuitive interface help you master character development, plot points, and dialogue while getting a grip on screenplay formatting.</p>

        <h2 className="my-4 text-[2.5rem] font-bold">For Seasoned Scriptwriters:</h2>
        <p className=" text-xl font-md">Even experienced scriptwriters need a creative spark. NolanAI acts as your catalyst, offering fresh ideas and innovative perspectives to elevate your writing. Discover new angles, plot twists, and character arcs that enhance your storytelling. NolanAI complements your expertise by working alongside you, amplifying your skills. Check out our advanced plans for professionals like you here:
          <Link className='ml-2 text-[#057ffa] ' href={'/price'}>Check premium plan</Link>
        </p>

        <h2 className="my-4 text-[2.5rem] font-bold">Control and Creativity:</h2>
        <p className=" text-xl font-md">We believe in empowering screenwriters, not taking over. With NolanAi, you&apos;re always in control. Our AI-powered features seamlessly integrate into your workflow, providing intelligent suggestions and streamlining your creative process. Our user-friendly interface allows you to effortlessly shape and refine your scripts, bringing your stories to life efficiently and effectively.</p>
        <br />
        <p className=" text-xl font-md font-semibold">Experience the transformative impact of NolanAI and unleash your potential today.</p>
        <br/>
        <p className=" text-xl font-md">Drop us an email: <a className='text-[#057ffa]' href="mailto:akushwa070@gmail.com">hello@nolanai.app</a></p>
        <br/>
        <p className=" text-xl font-md">For Support: <a className='text-[#057ffa]' href="mailto:akushwa070@gmail.com">support@nolanai.app</a></p>
      </div>
    </div>
  )
}

export default About