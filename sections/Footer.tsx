
import Link from "next/link";

export default function Footer() {

    const footer_socials = [ { href: "https://www.tiktok.com/@southborn_apparel", label: "TikTok" }, { href: "https://www.instagram.com/southborn_apparel", label: "Instagram" }, { href: "https://www.facebook.com/profile.php?id=61591599837592", label: "Facebook" }, { href: "https://www.youtube.com/channel/UC-vcu5yTV7KU91salYxz1bA", label: "YouTube" }, { href: "https://www.linkedin.com/company/southborn/", label: "LinkedIn" } ];

    return (
        <footer className="flex flex-col items-center lg:py-40">
            <h1 className="text-white lg:text-9xl">SOUTHBORN</h1>

             <ul className="relative flex text-neutral-300 flex-row flex-wrap lg:gap-10 gap-4 justify-center items-center text-xs lg:text-sm  py-4 lg:py-6 px-8 lg:px-12 mx-4">
                        {
                            footer_socials.map((item,i) => (
                                <Link key={i} href={item.href} target="blank" className="hover:text-white transition-all cursor-pointer tracking-wider">
                                    <span>{item.label}</span>
                                </Link>
                            ))
                        }

                        {/* Top border */}
                        <div className="absolute top-0 left-[50%] -translate-x-[50%] h-px w-full bg-linear-to-r from-transparent via-white/50 to-transparent"/>
                    </ul>
        </footer>
    )
}