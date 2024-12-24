"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoImage from "/assets/logo.png";
import Button from "../components/Button";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-header-bg">
      <div className="flex justify-between items-center h-[96px] text-[17px] max-w-[1181px] mx-auto font-medium">
        <div>
          <Link href="/">
            <Image
              priority
              src={logoImage}
              alt="logo"
              width={190}
              height={50}
            />
          </Link>
        </div>

        <div>
          <nav className="flex -text-dark gap-8">
            <Link
              href="/"
              className={`${pathname === "/" ? "-text-golden" : "-text-dark"}`}
            >
              Home
            </Link>

            <Link
              href="/features"
              className={`${
                pathname === "/features" ? "-text-golden" : "-text-dark"
              }`}
            >
              Features
            </Link>

            <Link
              href="https://www.kaispe.com/resources/blogs/"
              target="_blank"
            >
              Blogs
            </Link>

            <Link
              href="/pricing"
              className={`${
                pathname === "/pricing" ? "-text-golden" : "-text-dark"
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "-text-golden" : "-text-dark"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <Button
            href="https://kspcs.powerappsportals.com/customer-landing/"
            text="Support Portal"
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
}
