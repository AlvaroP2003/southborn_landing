
import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="flex flex-col lg:flex-row lg:justify-between h-[50vh] py-20 lg:py-40 px-5 lg:px-50 lg:h-[70vh]">
            
            <h1 className="text-white text-4xl lg:text-6xl lg:flex-1 mb-4 lg:mb-0">WHERE GYM MEETS THE STREET</h1>

                <div className="relative w-full lg:flex-1">
                    <p className="text-neutral-400">Southborn is a Cape Town-born gym and streetwear brand for people who don't separate training from style. We make compression shirts and performance apparel designed to move with you — built for the gym floor, made for the street.
South Africa's fitness culture is raw, hard-working, and unapologetic. Southborn is our answer to that: gear that performs when you're under the bar and still looks right when you're not. No compromise between function and form.</p>
                </div>
        </section>
    )
}