import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mx-2 md:mx-8">
      <div className="p-4 flex flex-col items-center gap-2 md:gap-0 md:flex-row md:justify-between">
        <div className="flex items-center gap-6">
          <p className="para-mono-rg">Design by Linn Johansen</p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/linnkognito"}
          >
            <GithubLogoIcon className="hover:text-accent" />
          </Link>
        </div>
        <p className="para-mono-rg">Cameron Stanley &copy;2026</p>
      </div>
    </footer>
  );
}
