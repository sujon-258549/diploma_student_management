"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Image from "next/image";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
    {
      label: "Create Teacher",
      href: "/main_dashboard/create-teacher",
      icon: (
        <IconUserBolt className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
    {
      label: "Create Student",
      href: "/main_dashboard/create-student",
      icon: (
        <IconUserBolt className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
    {
      label: "All Department",
      href: "/main_dashboard/department",
      icon: (
        <IconSettings className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        " flex  lg:min-h-screen   flex-col overflow-hidden rounded-md",
        "h-[50px]", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10 bg-cyan-800">
          <div className=" overflow-x-hidden  text-white overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col  text-white gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Image src={'/logo.png'} alt="logo" height={100} width={130} />
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};


