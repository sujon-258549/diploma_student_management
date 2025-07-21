import DepartmentCards from '@/components/page/home/DepartmentCards';
import Gallery from '@/components/page/home/Gallery';
import Hero from '@/components/page/home/Hero';
import React from 'react';

const page = () => {
    return (
        <div>
         <Hero/>
         <DepartmentCards/>
         <Gallery/>
        </div>
    );
};

export default page;