// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import profilePic from "../../public/profile.png";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && window.location.hash === href.split("/")[1];
    }
    return pathname === href;
  };

  return (
    <nav className="fixed w-full px-6 md:px-12 lg:px-24 py-4 z-50 bg-black backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={profilePic}
            alt="Umer Iqbal"
            width={48}
            height={48}
            className="rounded-full ring-2 ring-purple-600"
          />
          <span className="text-xl md:text-2xl font-bold text-white">
            Umer Iqbal
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-white">
          <Link
            href="/#home"
            className={`hover:text-gray-200 transition relative group ${
              isActive("/#home") ? "text-blue-400" : ""
            }`}
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Home
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 
              scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          <Link
            href="/#projects"
            className={`hover:text-gray-200 transition relative group ${
              isActive("/#projects") ? "text-blue-400" : ""
            }`}
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projects
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 
              scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          <Link
            href="/#skills"
            className={`hover:text-gray-200 transition relative group ${
              isActive("/#skills") ? "text-blue-400" : ""
            }`}
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Skills
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 
              scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          <Link
  href="/about"
  className={`hover:text-gray-200 transition relative group ${
    isActive("/about") ? "text-blue-400" : ""
  }`}
>
            About
          </Link>

          <Link
            href="/#contact"
            className={`hover:text-gray-200 transition relative group ${
              isActive("/#contact") ? "text-blue-400" : ""
            }`}
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 
              scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;