import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: "Education",
        links: [
            { name: "Computer Technology", href: "/education/computer" },
            { name: "Electrical Technology", href: "/education/electrical" },
            { name: "Electronics Technology", href: "/education/electronics" },
            { name: "Mechanical Technology", href: "/education/mechanical" },
            { name: "Civil Technology", href: "/education/civil" },
            { name: "Power Technology", href: "/education/power" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "#" },
            { name: "Team", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Help", href: "#" },
            { name: "Sales", href: "#" },
            { name: "Advertise", href: "#" },
            { name: "Privacy", href: "#" },
        ],
    },
];

const defaultSocialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
];

const Footer7 = ({
    logo = {
        url: "/",
        src: "/logo.png",
        alt: "logo",
        title: "Shadcnblocks.com",
    },
    sections = defaultSections,
    description = "A collection of components for your startup business or side project.",
    socialLinks = defaultSocialLinks,
    copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
    legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    return (
        <section className="bg-cyan-900 text-white mt-10 md:mt-20">
            <div className="container mx-auto px-5 pt-10 md:pt-20">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:justify-start">
                            <a href={logo.url}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    title={logo.title}
                                    className="h-8"
                                />
                            </a>
                            <h2 className="text-xl font-semibold">{logo.title}</h2>
                        </div>
                        <p className=" max-w-[70%] text-sm text-white">
                            {description}
                        </p>
                        <ul className=" text-white flex items-center space-x-6">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="hover:text-primary font-medium">
                                    <a href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">{section.title}</h3>
                                <ul className="text-white space-y-3 text-sm">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary font-medium"
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="  text-white mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary">
                                <a href={link.href}> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { Footer7 };