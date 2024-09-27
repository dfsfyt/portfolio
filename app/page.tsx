import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import MagicButton from "@/components/ui/MagicButton";
import { list } from "postcss";
import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome/>,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUser/>,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <FaMessage/>
      ),
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
     
    </main>
  );
}
