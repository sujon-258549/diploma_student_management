"use client";
import { Book, Zap, Cpu, Wrench, Bolt, SatelliteDish, Building2 } from "lucide-react";

import { usePathname } from "next/navigation";
import {

  LogInIcon,
  Menu,

} from "lucide-react";
import './nav.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Dropdown from "../shered/Dropdown";


interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "/logo.png",
    alt: "logo",
  },
  menu = [
    { title: "হোম", url: "/" },
    {
      title: "আমাদের সম্পর্কে",
      url: "/about",
      items: [
        {
          title: "সিভিল টেকনোলজি",
          description: "টেকনোলজি পরিচিতি",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "/civil/overview",
        },
        {
          title: "ইলেকট্রিক্যাল টেকনোলজি",
          description: "টেকনোলজি পরিচিতি",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/electrical/overview",
        },
        {
          title: "মেকানিক্যাল টেকনোলজি",
          description: "টেকনোলজি পরিচিতি",
          icon: <Wrench className="size-5 shrink-0" />,
          url: "/mechanical/overview",
        },
        {
          title: "পাওয়ার টেকনোলজি",
          description: "টেকনোলজি পরিচিতি",
          icon: <Bolt className="size-5 shrink-0" />,
          url: "/power/overview",
        },
        {
          title: "কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি",
          description: "টেকনোলজি পরিচিতি",
          icon: <Book className="size-5 shrink-0" />,
          url: "/about/computer",
        },
        {
          title: "ইলেকট্রোমেডিকেল টেকনোলজি",
          description: "টেকনোলজি পরিচিতি",
          icon: <SatelliteDish className="size-5 shrink-0" />,
          url: "/electromedical/overview",
        },
        {
          title: "ইলেকট্রনিক্স টেকনোলজি",
          description: "টেকনোলজি পরিচিতি",
          icon: <Cpu className="size-5 shrink-0" />,
          url: "/electronics/overview",
        },
      ],
    },
    {
      title: "ইনস্টিটিউট পরিচিতি",
      url: "/all_about", // যদি notice পেজ না হয়, এভাবে route name ঠিক করো
    },
    {
      title: "নোটিশ",
      url: "/notice",
    },
    {
      title: "পোস্টসমূহ",
      url: "/post",
    },
  ]
}: Navbar1Props) => {
  const pathname = usePathname(); // 👈 Current route path

  return (
    <section className="py-4 bg-cyan-950">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-12" alt={logo.alt} />
            </a>
            <div className="flex items-center nav">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, pathname))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <Link className="cursor-pointer" href={'/login'}> <Button className="flex cursor-pointer justify-center">Login <LogInIcon /></Button></Link>
            <Dropdown />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between text-white">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item, pathname))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Updated to handle active class for desktop
const renderMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = pathname === item.url;

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="text-white border-2 border-white bg-cyan-600">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="border-2 border-white bg-cyan-600">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title}>
              <SubMenuLink item={subItem} active={pathname === subItem.url} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors border-2 ${isActive
          ? "bg-white text-cyan-900 border-yellow-400"
          : "bg-cyan-600 text-white border-white"
          }`}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

// ✅ Updated to handle active class for mobile
const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = pathname === item.url;

  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 text-white font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2 text-white">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} active={pathname === subItem.url} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className={`text-md font-semibold ${isActive ? "text-yellow-400" : "text-white"
        }`}
    >
      {item.title}
    </a>
  );
};

// ✅ Submenu component with active styling
const SubMenuLink = ({ item, active = false }: { item: MenuItem; active?: boolean }) => {
  return (
    <a
      href={item.url}
      className={`flex flex-row rounded-md px-3 mb-1 pb-3 leading-none no-underline transition-colors select-none ${active
        ? "bg-black text-white"
        : "text-white hover:bg-cyan-800 bg-cyan-950 hover:text-white"
        }`}
    >
      <div className="flex items-center justify-center gap-1">
        <div>{item.icon}</div>
        <div className="w-96">
          <div className="text-sm font-semibold  mt-4">{item.title}</div>
          {item.description && (
            <p className="text-sm leading-snug text-gray-300">{item.description}</p>
          )}
        </div>
      </div>
    </a>
  );
};

export { Navbar1 };
