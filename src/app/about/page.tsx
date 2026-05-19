import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/ui/primitives/Button";

export default function About() {
    return (
        <div className="px-4 md:px-24 pb-24">
            {/* Heading */}
            <section className="mb-16 lg:mb-28">
                <p className="para-sm-upper-reg text-subtle mb-4">About</p>
                <p className="heading-3 md:heading-1">
                    The person behind<br />
                    the{" "}
                    <span className="para-mono-lg text-[28px] md:text-[48px] text-subtle">
                        {"<"}<span className="text-sky">code</span>{">"}
                    </span>
                </p>
            </section>

            {/* Article */}
            <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:px-16">
                {/* Photo + stats + buttons — first on mobile, second on desktop */}
                <div className="flex flex-col rounded-xl order-1 lg:order-2 lg:w-[420px] shrink-0">
                    <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[368px]">
                        <Image
                            src="/me.png"
                            alt="Cameron Stanley"
                            fill
                            className="object-cover object-top rounded-t-xl"
                        />
                    </div>

                    <div className="border-t border-border flex items-start justify-between pt-6 pb-8 px-6 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <p className="text-2xl lg:text-[28px] font-bold text-sky leading-normal">12+</p>
                            <p className="para-sm-upper-reg text-[10px] text-subtle">Projects Live</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-2xl lg:text-[28px] font-bold text-sky leading-normal">3 YRS</p>
                            <p className="para-sm-upper-reg text-[10px] text-subtle">Experience</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-2xl lg:text-[28px] font-bold text-sky leading-normal">Open</p>
                            <p className="para-sm-upper-reg text-[10px] text-subtle">To Opportunities</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Button
                            asChild
                            className="flex-1 bg-blue hover:bg-blue/90 text-white border-none font-light px-8 h-10 gap-2"
                        >
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                view résumé <ArrowUpRightIcon size={16} />
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 font-light border-border bg-black/25 hover:bg-white/10 px-8 h-10 gap-2"
                        >
                            <Link href="/#projects">
                                see my work <ArrowRightIcon size={16} />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Text — second on mobile, first on desktop */}
                <div className="flex flex-col gap-10 lg:gap-20 flex-1 order-2 lg:order-1">
                    <p className="text-xl lg:text-[30px] leading-[1.4] font-light">
                        <span className="font-bold text-foreground">
                            I build full-stack products that hold up —{" "}
                        </span>
                        <span className="text-subtle">
                            good interfaces, clean APIs & code that&apos;s built to last.
                        </span>
                    </p>
                    <div className="para-lg-light flex flex-col gap-6">
                        <p>
                            I&apos;m a full-stack developer with a focus on TypeScript, Next.js, and Node.
                            I care about the details that most people skip — API design, error handling,
                            the kind of code that&apos;s still readable six months later.
                        </p>
                        <p>
                            I&apos;ve built everything from real-time collaboration tools to finance dashboards
                            and headless CMS platforms. I&apos;m most effective when I can own a feature
                            end-to-end — from database schema to the last pixel.
                        </p>
                        <p>
                            Right now I&apos;m open to full-time roles and contract work. I work best on
                            small, focused teams that move fast and care about what they ship.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
