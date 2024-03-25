import Card from "@/components/blog/Card";
import blogImg1 from '@/images/blogImg1.webp';
import blogImg2 from '@/images/blogImg2.webp';
import blogImg3 from '@/images/blogImg3.webp';
import heroImg from '@/images/hero.png';
import Image from "next/image";

const Blog = () => {
    const getDate = (date:string)=>{
        return new Date(date);
    }
    return (
        <div className="pb-20 w-full min-h-screen relative">
            <Image priority className="w-full h-[80vh] absolute left-0 top-0 z-[-1] object-cover" src={heroImg} alt='blog hero image' /> 
            <div className="w-full h-full absolute left-0 top-0 z-[-2] bg-[#171a1f]"></div>
            <div className="p-4 py-[4rem] text-[#f2f5f0]">
                <h1 className="text-6xl font-bold">NolanAI Blog</h1>
                <p className="py-6 text-xl">Unlocking the secrets of successful screenwriting</p>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card 
                image={blogImg1} 
                date={getDate('March 19, 2024, 04:56')}
                heading='9 Easy Steps to Mastering Script Breakdowns in Filmmaking'
                paragraph="As a seasoned filmmaker with years of experience, I understand the importance of a thorough script breakdown in the filmmaking process. Let's dive into how to effectively execute a script breakdown, incorporating some best practices along the way."
                url="/blog/blog1"
                />
                <Card 
                image={blogImg2} 
                date={getDate('March 16, 2024, 01:46')}
                heading='Breaking Barriers and Making History at the Oscars'
                paragraph="In a historic moment that reverberated through the film industry, the 2024 Oscar nominations shattered records by recognizing the exceptional talent and contributions of women filmmakers. As we celebrate these achievements, it's essential to acknowledge the groundbreaking work of female directors who have defied expectations and pushed boundaries in storytelling. This year's nominations include three remarkable films directed by women:"
                url="/blog/blog2"
                />
                <Card 
                image={blogImg3} 
                date={getDate('March 11, 2024, 04:36')}
                heading="Women's Impact Behind the Scenes in the Film Industry"
                paragraph="Lights, camera, action – and enter a league of extraordinary women rewriting the script behind the scenes in Hollywood. No, we're not talking about the leading ladies on the screen, but the brilliant minds shaping narratives, calling the shots, and breaking down barriers in the film industry."
                url="/blog/blog3"
                />
            </div>
        </div>
    )
}

export default Blog