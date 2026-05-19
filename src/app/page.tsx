import {
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/data/projectData";
import { backendStack, frontendStack } from "@/data/techStacks";
import ContactForm from "@/ui/components/ContactForm";
import ProjectList from "@/ui/components/ProjectList";
import { Button } from "@/ui/primitives/Button";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 md:px-8 lg:px-69 py-16 lg:py-24">
        <div className="relative z-10 lg:max-w-[600px]">
          <h1 className="flex flex-col text-[3rem] font-medium leading-[1.29] tracking-[0.021em] lg:text-[80px] lg:leading-[95px] lg:tracking-normal lg:font-normal">
            <span className="text-subtle">CameronStanley:</span>
            <span className="lg:font-semibold">FullStackDev</span>
          </h1>
          <p className="text-base font-light leading-[1.5] py-4 lg:text-lg lg:leading-7">
            Full-stack developer focused on clean interfaces and reliable
            systems.
            <br className="hidden lg:block" />I care about the details — from
            API design to the last pixel.
          </p>
          <div className="flex gap-4 pt-2">
            <Button
              asChild
              className="flex-1 bg-blue hover:bg-blue/90 text-white border-none font-mono font-light px-8 h-10"
            >
              <Link href="/projects">Shipped</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 font-mono font-light border-border bg-black/25 hover:bg-white/10 px-8 h-10 gap-2"
            >
              <Link href={"/#contact"}>
                Say hello <ArrowUpRightIcon size={16} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 -z-10 hidden lg:block pointer-events-none">
          <Image
            alt=""
            src={"/flow-lines.svg"}
            width={917}
            height={995}
            className="h-full w-auto"
          />
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="px-4 md:px-24 flex gap-8 items-center py-32">
          <Image alt="" src={"/cube.svg"} width={56} height={56} />
          <div className="flex flex-col">
            <p className="para-sm-upper-reg text-subtle">Selected Work</p>
            <p className="heading-2">Projects</p>
          </div>
        </div>
        <ProjectList projects={projectData.slice(0, 3)} />
      </section>

      {/* Tech Stack */}
      <section>
        <div className="px-4 md:px-24 flex gap-8 items-center py-32">
          <Image alt="" src={"/stack.svg"} width={56} height={56} />
          <div className="flex flex-col">
            <p className="para-sm-upper-reg text-subtle">Toolbox</p>
            <p className="heading-2">Stack</p>
          </div>
        </div>

        <div className="px-4 md:px-24 flex gap-8 mb-10">
          <div className="flex items-center gap-3 w-1/2">
            <span className="para-sm-upper-reg text-subtle">frontend</span>
            <div className="flex-1 border-t border-gray-600" />
          </div>
          <div className="flex items-center gap-3 w-1/2">
            <span className="para-sm-upper-reg text-subtle">backend</span>
            <div className="flex-1 border-t border-gray-600" />
          </div>
        </div>

        <div className="px-4 md:px-24 grid grid-cols-2 gap-y-10 py-10">
          {/* Frontend column */}
          <div className="flex flex-col gap-10">
            {frontendStack.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <Image src={item.icon} alt={item.name} width={48} height={48} />
                <div className="flex flex-col">
                  <p className="para-md">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Backend column */}
          <div className="flex flex-col gap-10">
            {backendStack.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <Image src={item.icon} alt={item.name} width={48} height={48} />
                <div className="flex flex-col">
                  <p className="para-md">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact me */}
      <section id="contact" className="py-32 px-4 md:px-24 grid md:grid-cols-2 gap-8">
        <div>
          <div>
            <p className="para-sm-upper-reg text-subtle">Contact</p>
            <p className="heading-2">
              Get in <span className="text-subtle">touch</span>
            </p>
          </div>
          <div className="py-12">
            <p className="para-lg-light">
              Whether it's a project, a role, or just a question — I'm always
              happy to chat. I'll get back to you within a day or two.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <p className="para-sm-upper-reg text-subtle">
              or reach me directly
            </p>
            <Link
              href={"mailto:cam96stanley@gmail.com"}
              className="flex items-center gap-2"
            >
              <EnvelopeSimpleIcon />
              <p className="para-mono-rg cursor-pointer hover:text-sky">
                cam96stanley@gmail.com
              </p>
            </Link>
            <div className="flex gap-8">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/Cam96stanley"}
                className="flex items-center gap-2"
              >
                <GithubLogoIcon className="text-sky" size={16} />
                <p className="para-mono-sm text-subtle hover:text-accent">
                  Github
                </p>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/in/cameron-stanley-007908339/"}
                className="flex items-center gap-2"
              >
                <LinkedinLogoIcon className="text-accent" size={16} />
                <p className="para-mono-sm text-subtle hover:text-sky">
                  LinkedIn
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
