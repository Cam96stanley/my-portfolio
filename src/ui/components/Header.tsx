"use client";

import {
  DownloadSimpleIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="px-4 md:px-8 lg:px-69 py-6 md:py-8 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href={"/"} onClick={() => setMenuOpen(false)}>
            <Image
              src={"/logo.svg"}
              width={84}
              height={84}
              alt=""
              className="w-14 h-14 md:w-[84px] md:h-[84px]"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="para-mono-sm" href={"/projects"}>
              work
            </Link>
            <Link className="para-mono-sm" href={"/about"}>
              about
            </Link>
            <a href="" className="para-mono-sm flex items-center gap-2">
              resume <DownloadSimpleIcon size={16} />
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex gap-8">
            <a href="https://github.com/Cam96stanley">
              <GithubLogoIcon size={32} />
            </a>
            <a href="https://www.linkedin.com/in/cameron-stanley-007908339/">
              <LinkedinLogoIcon size={32} />
            </a>
            <a href="mailto:cam96stanley@gmail.com">
              <EnvelopeIcon size={32} />
            </a>
          </div>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-8 gap-8">
          <div className="flex flex-col gap-5">
            <Link
              className="para-mono-sm"
              href={"/projects"}
              onClick={() => setMenuOpen(false)}
            >
              work
            </Link>
            <Link
              className="para-mono-sm"
              href={"/about"}
              onClick={() => setMenuOpen(false)}
            >
              about
            </Link>
            <a
              href=""
              className="para-mono-sm flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              resume <DownloadSimpleIcon size={16} />
            </a>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Cam96stanley">
              <GithubLogoIcon size={28} />
            </a>
            <a href="https://www.linkedin.com/in/cameron-stanley-007908339/">
              <LinkedinLogoIcon size={28} />
            </a>
            <a href="mailto:cam96stanley@gmail.com">
              <EnvelopeIcon size={28} />
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
