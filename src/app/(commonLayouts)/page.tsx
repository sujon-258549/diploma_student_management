import DepartmentCards from '@/components/page/home/DepartmentCards';
import Gallery from '@/components/page/home/Gallery';
import Hero from '@/components/page/home/Hero';
import React from 'react';

// ✅ SEO Metadata
export const metadata = {
  title: "Home | My Website",
  description: "Welcome to my Next.js website. Explore our departments, gallery, and more.",
  keywords: "Next.js, SEO, Department, Gallery, Hero",
  openGraph: {
    title: "Home | My Website",
    description: "Explore departments and gallery on our Next.js site.",
    url: "https://mywebsite.com",
    siteName: "My Website",
    images: [
      {
        url: "https://mywebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Hero />
      <DepartmentCards />
      <Gallery />
    </div>
  );
};

export default Page;
