import Image from "next/image";


export default function Features() {

    const productFeatures = [
    {
        heading: "Compression",
        features: [
        {
            image: "/features/compression/1.webp",
            title: "Built to Last",
            body: "Substantial by design. Every piece is crafted with a heavier weight than the industry standard — so it holds its shape, resists wear, and doesn't thin out after a few washes. This isn't fast fashion fabric."
        },
        {
            image: "/features/compression/2.webp",
            title: "Engineered to Hold",
            body: "Reinforced where it matters most. Our stitching is built to handle real movement, not just look good on a hanger — so seams stay intact no matter how hard you push."
        },
        {
            image: "/features/compression/3.webp",
            title: "Premium Feel, Every Time",
            body: "We don't cut corners on what touches your skin. Sourced and selected for softness, durability, and performance - finished with a durable logo application that elevates every piece."
        },
        {
            image: "/features/compression/4.webp",
            title: "Detail in Every Stitch",
            body: "The finishing touch that says it's ours. A silicone gripper keeps everything locked in place, a small detail that elevates every piece from activewear to signature."
        }
        ]
    },
    {
        heading: "Oversized Tee",
        features: [
        {
            image: "/features/oversized/1.webp",
            title: "Oversized, On Purpose",
            body: "Cut loose, not lazy. A relaxed, drop-shoulder fit designed to hang right — room to move, layer, and lounge without losing shape."
        },
        {
            image: "/features/oversized/3.webp",
            title: "Stitched, Not Printed",
            body: "A small mark, made to last. Our front logo is embroidered — not slapped on — for a finish that holds up long after prints fade or crack."
        },
        {
            image: "/features/oversized/4.webp",
            title: "Bold on the Back",
            body: "Impossible to ignore. A full back graphic with a raw, distorted edge — made to turn heads whether you're under the bar or out on the block."
        },
          {
            image: "/features/oversized/2.webp",
            title: "Soft as Standard",
            body: "Pure cotton, zero compromise. Breathable, soft, and built to get better with every wash — this is comfort you feel the second you put it on."
        },
        ]
    }
    ];    

    return (
            <section id="features">
                
                {
                    productFeatures.map((item,i) => (
                        <div key={i} className="mb-20 lg:mb-40">

                            <div className="flex justify-between items-start px-5 lg:px-50">
                                <h2 className="text-white text-3xl lg:text-5xl mb-4">{item.heading}</h2>

                                <span className="text-neutral-500 text-xs max-w-[40%] lg:max-w-[30%]">AI-generated concept - not actual product photo</span>
                            </div>

                            <div className="relative flex gap-2 pl-5 lg:pl-50 pr-10 overflow-scroll flex-nowrap">
                                {
                                    item.features.map((feature,i) => (
                                        <div key={i} className="flex-1 min-w-[300px] lg:min-w-[450px]">
                                            <div className="relative h-[400px] lg:h-[550px] w-full mb-4 overflow-hidden">
                                                <Image src={feature.image} fill alt={feature.title} className="object-cover hover:scale-110 transition-all duration-300"/>
                                            </div>

                                            <h3 className="text-white lg:text-lg mb-2 mx-2 font-medium">{feature.title}</h3>
                                            <p className="text-neutral-400 text-sm mx-2">{feature.body}</p>
                                        </div>
                                    ))
                                }
                            </div>
                           
                        </div>
                        
                    ))
                }

            </section>
        )
    }