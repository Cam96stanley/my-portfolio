"use client";

import { ArrowLeftIcon, ArrowCounterClockwiseIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/ui/primitives/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative overflow-hidden px-4 md:px-8 lg:px-69 py-16 lg:py-32 flex flex-col justify-center min-h-[60vh]">
      <div className="relative z-10 lg:max-w-[640px]">
        <p className="para-sm-upper-reg text-subtle mb-4">error</p>
        <h1 className="flex flex-col text-[3rem] font-medium leading-[1.29] tracking-[0.021em] lg:text-[80px] lg:leading-[95px] lg:tracking-normal lg:font-normal mb-6">
          <span className="text-subtle">500:</span>
          <span className="lg:font-semibold">RuntimeError</span>
        </h1>
        <p className="para-lg-light text-subtle mb-4">
          Something went wrong on our end. This has been logged and will be
          looked into.
        </p>
        {error.digest && (
          <p className="para-mono-sm text-subtle mb-10">
            ref:{" "}
            <span className="text-sky">{error.digest}</span>
          </p>
        )}
        {!error.digest && <div className="mb-10" />}
        <div className="flex gap-4">
          <Button
            onClick={reset}
            className="flex-1 sm:flex-none bg-blue hover:bg-blue/90 text-white border-none font-mono font-light px-8 h-10 gap-2"
          >
            <ArrowCounterClockwiseIcon size={16} /> Try again
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 sm:flex-none font-mono font-light border-border bg-black/25 hover:bg-white/10 px-8 h-10 gap-2"
          >
            <Link href="/">
              <ArrowLeftIcon size={16} /> Go home
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 -z-10 hidden lg:block pointer-events-none">
        <Image
          alt=""
          src="/flow-lines.svg"
          width={917}
          height={995}
          className="h-full w-auto opacity-40"
        />
      </div>
    </div>
  );
}
