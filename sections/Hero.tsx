import Image from "next/image"


export default function Hero() {

    const socials = [

    ]

    return (
        <section id="hero" className="h-screen flex flex-col bg-neutral-950">

            {/* Header */}
            <header className="h-[15vh] flex justify-between items-center lg:px-20">

                <div className="relative w-22 h-15">
                    <Image src={'/header_logo.png'} fill alt="header_logo" className="object-cover"/>
                </div>

                <ul>

                </ul>

            </header>


            {/* Main Section */}
            <main className="flex-1 flex pt-55 items-center flex-col">

                    <h1 className="text-white">SOUTHBORN</h1>
                    <h2 className="text-white lg:text-2xl tracking-[20] mb-8">COMING SOON</h2>
                    <p className="text-neutral-400 max-w-[35%] lg:text-lg text-center">We're still taping boxes shut. Get on the list and you'll be first through the door — before the drop, before the stock runs out.</p>
            </main>
        </section>
    )
}