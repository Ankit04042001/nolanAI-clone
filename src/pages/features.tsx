import Feature from "@/components/feature/Feature"
import { MdDeveloperBoard, MdNewspaper, MdOutlineAutoAwesome, MdOutlineFormatAlignCenter, MdOutlinePsychology, MdOutlineVideoCameraFront } from "react-icons/md"
import Image from "next/image";
import about from '@/images/about.webp';
import { PiPiggyBank } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { FaRegListAlt, FaSearchengin } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const Features = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Image priority className="w-full h-[50vh] lg-[h-80vh] object-cover absolute left-0 top-0 z-[-1]" src={about} alt='Feature page hero image'/>
      <div className="w-full h-full bg-[#171a20] absolute left-0 top-0 z-[-2]"></div>
      <h1 className="pt-20 p-4 text-[4rem] text-[#f5f2f0] font-bold">FEATURES</h1>
      <p className="mb-20 p-4 text-xl text-[#f5f2f0] font-semibold">See what NolanAI comprehensive toolkit can do for you.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Feature
        url={'/feature'}
        avtar={<MdNewspaper />}
        avtarColor="#9c250c"
        heading="AI SCRIPT COVERAGE REPORTING"
        paragraph="AI Script Coverage delivers a comprehensive report on your script's logline, impression, synopsis, and character details—all within minutes."
        />
        <Feature
        url={'/feature'}
        avtar={<PiPiggyBank />}
        avtarColor="#525e62"
        heading="AI BUDGETING"
        paragraph="Coming Soon"
        />
        <Feature
        url={'/feature'}
        avtar={<IoMdTime />}
        avtarColor="#1364d9"
        heading="SCHEDULING"
        paragraph="Automatically sorts your stripboard (with advanced algorithms and the power of AI) in the most efficient way for shooting."
        />
        <Feature
        url={'/feature'}
        avtar={<MdOutlinePsychology />}
        avtarColor="#da8813"
        heading="BRAINSTORMING"
        paragraph="Collaborate with AI on brainstorming for script and screenplay writing."
        />
        <Feature
        url={'/feature'}
        avtar={<MdDeveloperBoard />}
        avtarColor="#649c07"
        heading="STORYBOARD"
        paragraph="Next-Level Storyboard for Film and Story Development"
        />
        <Feature
        url={'/feature'}
        avtar={<MdOutlineVideoCameraFront />}
        avtarColor="#7e082b"
        heading="CHARACTER DEVELOPMENT"
        paragraph="Create, Edit your character with help of AI. "
        />
        <Feature
        url={'/feature'}
        avtar={<MdOutlineAutoAwesome />}
        avtarColor="#83c619"
        heading="AI COPILOT"
        paragraph="To help you create high-quality story, Nolan offers a powerful  AI editing feature. "
        />
        <Feature
        url={'/feature'}
        avtar={<MdOutlineFormatAlignCenter />}
        avtarColor="#d54927"
        heading="SMART FORMATTING"
        paragraph="Script Smart uses advanced algorithms to automatically format your text into a screenplay format."
        />
        <Feature
        url={'/feature'}
        avtar={<FaRegListAlt />}
        avtarColor="#0650b9"
        heading="AUTOMATIC SCRIPT BREAKDOWN"
        paragraph="The Automatic Screenplay Breakdown (Break Smart) is a time-saving solution that simplifies the process of deconstructing a screenplay."
        />
        <Feature
        url={'/feature'}
        avtar={<FaSearchengin />}
        avtarColor="#b11e46"
        heading="PLOT HOLE DETECTION REPORT"
        paragraph="With the Plot Hole Detection Report, you can ensure the consistency and quality of your story, enhancing the overall engagement of your content."
        />
        <Feature
        url={'/feature'}
        avtar={<FiEdit3 />}
        avtarColor="#da8813"
        heading="THE INDUSTRY STANDARD EDITOR"
        paragraph="Nolan provides a user-friendly interface, advanced formatting options."
        />

      </div>
    </div>
  )
}

export default Features