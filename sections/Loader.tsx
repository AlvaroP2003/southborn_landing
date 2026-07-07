'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

export default function Loader() {

    useGSAP(() => {

        const tl = gsap.timeline()

        tl.fromTo('#loader-logo', 
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 1, delay:0.8, ease: "power2.out" }
        )
        .to('#loader-logo', {
            opacity: 0,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.in"
        })
        .to('#loader-top', {
            yPercent: -100,
            duration: 1,
            delay: 0.5,
            ease: "power4.inOut"
        }, "<") 
        .to('#loader-bottom', {
            yPercent: 100,
            duration: 1,
            ease: "power4.inOut"
        }, "<")

    }, [])

    return (
        <section id="loader" className="absolute inset-0 flex flex-col pointer-events-none overflow-hidden">

            <div id="loader-top" className="bg-neutral-950 flex-1"/>
            <div id="loader-bottom" className="bg-neutral-950 flex-1"/>

            <div id="loader-logo" className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-25 w-25 opacity-0">
                <Image src="/main_icon.svg" fill alt="loader-logo" className="object-cover"/>
            </div>
            
        </section>
    )
}