'use client'

import Image from "next/image"
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Hero() {

const socials = [ { href: "https://www.tiktok.com/@southborn_apparel", label: "TikTok" }, { href: "https://www.instagram.com/southborn_apparel", label: "Instagram" }, { href: "https://www.facebook.com/profile.php?id=61591599837592", label: "Facebook" }, { href: "https://www.youtube.com/channel/UC-vcu5yTV7KU91salYxz1bA", label: "YouTube" }, { href: "https://www.linkedin.com/company/southborn/", label: "LinkedIn" } ];


    useGSAP(() => {
        gsap.from('#main', {
            yPercent:20,
            autoAlpha:0,
            delay:4,
        })

    },[])

    return (
        <section id="hero" className="relative h-screen flex flex-col bg-black overflow-hidden border-2">

            
            {/* Hero Images */}
            <div className="lg:hidden absolute h-full w-full">
                <Image src={'/hero_sml.png'} fill alt="header_logo" className="object-cover"/>
            </div>

            <div className="hidden lg:block absolute h-full w-full">
                <Image src={'/hero_lg.png'} fill alt="header_logo" className="object-cover"/>
            </div>

            {/* Overlay */}
            <div className="absolute bg-neutral-950/70 inset-0"/>


            {/* Header */}
            <header className="relative lg:h-[15vh] flex justify-center items-center lg:px-20 p-5">

                <div className="relative w-10.5 h-7 lg:w-18 lg:h-12">
                    <Image src={'/header_logo.png'} fill alt="header_logo" className="object-cover"/>
                </div>

            </header>


            {/* Main Section */}
            <main id="main" className="relative flex-1 flex pt-55 items-center flex-col px-5">

                    <h1 className="text-white">SOUTHBORN</h1>
                    <h2 className="text-white lg:text-xl text-sm tracking-[14] mb-8 font-medium">COMING SOON</h2>
                    <p className="text-neutral-400 lg:max-w-[35%] lg:text-base text-xs text-center mb-4 lg:mb-10">We're still perfecting the designs. Stay tuned on our socials to follow the process.</p>

                     <ul className="flex text-neutral-300 flex-row flex-wrap lg:gap-10 gap-4 justify-center items-center text-xs lg:text-sm border-t border-white/20 py-4 lg:py-6 px-8 lg:px-12 mx-4">
                    {
                        socials.map((item,i) => (
                            <Link key={i} href={item.href} target="blank" className="hover:text-white transition-all cursor-pointer tracking-wider">
                                <span>{item.label}</span>
                            </Link>
                        ))
                    }
                </ul>
            </main>
        </section>
    )
}