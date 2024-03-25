import hero from '@/images/about.webp';
import Image from 'next/image';

const referral = () => {
    return (
        <div className="pb-20 w-full min-h-screen text-[#f6f6f6] relative ">
            <Image priority className="w-full h-[80vh] absolute left-0 top-0 object-cover z-[-1]" src={hero} alt='Referral hero Image' />
            <div className="w-full h-full bg-[#191b1f] absolute left-0 top-0 z-[-2]"></div>
            <h1 className="pt-[4rem] pl-[1rem] lg:pl-[4rem] text-[4rem] font-bold">Referral Program</h1>
            <div className="lg:mr-40 lg:pl-40 pt-20 pl-[1rem]">
                <h2 className="my-4 text-[2.5rem] font-bold">Join Our Referral Program!</h2>
                <p className=" text-xl font-md">Hey, content creators and scriptwriters!  Are you a fan of NolanAI&apos;s content wizardry? Here&apos;s your chance to spread the magic and earn while you do it. Join our Referral Program and invite your creative friends to the NolanAI family. For every friend who signs up for a paid subscription, you&apos;ll earn a cool 5% cashback!  The best part? There are NO limits on how many friends you can invite. Share the word, share the love, and watch your earnings grow! </p>

                <h2 className="my-4 text-[2.5rem] font-bold">How it works!</h2>
                <ul className='px-8 list-[circle]'>
                    <li className="mt-4 text-xl font-md">Sign Up with NolanAI: Begin by creating your account on NolanAI</li>
                    <li className="mt-4 text-xl font-md">Access the Affiliate Program: Once your account is set up, go to your profile, and click on &quot;Join the Affiliate Program&quot; at this link</li>
                    <li className="mt-4 text-xl font-md">Generate Your Unique Affiliate Code</li>
                    <li className="mt-4 text-xl font-md">Share and Earn: Start sharing your unique code to earn cashback and enjoy the benefits of being a NolanAI affiliate.</li>
                </ul>

                <p className="mt-6 text-xl font-md">Ready to start? Visit our website to become a NolanAI Affiliate today! Let&apos;s script success together.  #AffiliateProgram #NolanAI #EarnWithFriends</p>

                <div className='my-6 w-full flex justify-center'>
                    <button className='px-4 py-2 bg-[#1d6ee3] text-[#f5f2f0] font-bold rounded-3xl text-center'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default referral