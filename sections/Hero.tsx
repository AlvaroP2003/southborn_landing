'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Hero() {

    const links = [
        { href: "#about", label: "About Us" },
        { href: "#features", label: "Features" },
        { href: "#faq", label: "FAQ" },
    ];

    const socials = [ { href: "https://www.tiktok.com/@southborn_apparel", label: "TikTok" }, { href: "https://www.instagram.com/southborn_apparel", label: "Instagram" }, { href: "https://www.facebook.com/profile.php?id=61591599837592", label: "Facebook" }, { href: "https://www.youtube.com/channel/UC-vcu5yTV7KU91salYxz1bA", label: "YouTube" }, { href: "https://www.linkedin.com/company/southborn/", label: "LinkedIn" } ];

    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

    useEffect(() => {
        const mql = window.matchMedia('(min-width: 1024px)');
        setIsDesktop(mql.matches);

        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    useGSAP(() => {
        gsap.from('#main', {
            yPercent: 10,
            autoAlpha: 0,
            delay: 3.5,
            ease: 'power2.out'
        });

        gsap.to('#scroll-indicator', {
            y: 8,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: 4
        });

    }, []);

    return (
        <section id="hero" className="relative h-screen flex flex-col overflow-hidden">

            
            {/* Hero Image */}
            {isDesktop !== null && (
                <div className="absolute h-full w-full">
                    <Image
                        src={isDesktop ? '/hero_lg.png' : '/hero_sml.webp'}
                        fill
                        alt="header_logo"
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>
            )}

            {/* Overlay */}
            <div className="absolute bg-linear-to-b from-black/50 via-black/75 to-black inset-0"/>


            {/* Header */}
            <header className="relative lg:h-[15vh] flex justify-between items-center lg:px-20 p-5">

                <div className="relative w-10.5 h-7 lg:w-18 lg:h-12">
                    <Image src={'/main_icon.svg'} fill alt="header_logo" className="object-cover"/>
                </div>

                 <ul className="flex text-neutral-300 flex-row flex-wrap lg:gap-10 gap-4 justify-center items-center text-xs lg:text-sm">
                        {
                            links.map((item,i) => (
                                <Link key={i} href={item.href} className="hover:text-white transition-all cursor-pointer tracking-wider">
                                    <span>{item.label}</span>
                                </Link>
                            ))
                        }
                </ul>

            </header>


            {/* Main Section */}
            <main id="main" className="relative flex-1 flex pt-50 items-center flex-col px-5">

                    <h1 className="text-white">SOUTHBORN</h1>
                    <h2 className="text-white lg:text-3xl text-sm tracking-[14] mb-8 font-medium">COMING SOON</h2>

                    <p className="text-neutral-400 lg:max-w-[35%] lg:text-base text-xs text-center mb-8">Southborn gym and streetwear brand based in South Africa, offering compression shirts and performance apparel for people who train hard and dress harder.</p>

                    <p className="text-neutral-400 lg:max-w-[35%] lg:text-base text-xs text-center mb-4 lg:mb-10">We're still perfecting the designs. Stay tuned on our socials to follow the process.</p>

                     <ul className="relative flex text-neutral-300 flex-row flex-wrap lg:gap-10 gap-4 justify-center items-center text-xs lg:text-sm  py-4 lg:py-6 px-8 lg:px-12 mx-4">
                        {
                            socials.map((item,i) => (
                                <Link key={i} href={item.href} target="blank" className="hover:text-white transition-all cursor-pointer tracking-wider">
                                    <span>{item.label}</span>
                                </Link>
                            ))
                        }

                        {/* Top border */}
                        <div className="absolute top-0 left-[50%] -translate-x-[50%] h-px w-[80%] bg-linear-to-r from-transparent via-white/50 to-transparent"/>
                    </ul>
            </main>

            {/* Scroll Indicator */}
                <div
                    id="scroll-indicator"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-neutral-300"
                >
                    <span className="text-[10px] lg:text-xs tracking-[0.35em] uppercase">
                        Scroll
                    </span>

                    <div className="mt-2 w-px h-8 bg-white/50" />
                </div>
        </section>
    )
}