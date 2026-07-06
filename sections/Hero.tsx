import Image from "next/image"
import Link from "next/link";


export default function Hero() {

const socials = [ { href: "https://www.tiktok.com/@southborn_apparel", label: "TikTok" }, { href: "https://www.instagram.com/southborn_apparel", label: "Instagram" }, { href: "https://www.facebook.com/profile.php?id=61591599837592", label: "Facebook" }, { href: "https://www.youtube.com/channel/UC-vcu5yTV7KU91salYxz1bA", label: "YouTube" }, { href: "https://www.linkedin.com/company/southborn/", label: "LinkedIn" } ];

    return (
        <section id="hero" className="relative h-screen flex flex-col bg-black">

            <video
            src="/hero_lg.mp4"
            className="absolute h-full w-full object-cover rotate-180 opacity-60"
            autoPlay
            muted
            loop
            playsInline
            />

            {/* Header */}
            <header className="relative lg:h-[15vh] flex justify-between items-center lg:px-20 p-5">

                <div className="relative w-22 h-15">
                    <Image src={'/header_logo.png'} fill alt="header_logo" className="object-cover"/>
                </div>

                <ul className="flex flex-col text-neutral-400 lg:flex-row lg:gap-10 gap-2 items-end text-sm">
                    {
                        socials.map((item,i) => (
                            <Link key={i} href={item.href} target="blank" className="hover:text-white transition-all cursor-pointer tracking-wider">
                                <span>{item.label}</span>
                            </Link>
                        ))
                    }
                </ul>

            </header>


            {/* Main Section */}
            <main className="relative flex-1 flex lg:pt-55 pt-50 items-center flex-col px-5">

                    <h1 className="text-white">SOUTHBORN</h1>
                    <h2 className="text-white lg:text-xl text-sm tracking-[20] my-6 font-medium">COMING SOON</h2>
                    <p className="text-neutral-400 lg:max-w-[35%] lg:text-lg text-sm text-center">We're still perfecting the designs. Stay tuned on our socials to follow the process.</p>
            </main>
        </section>
    )
}