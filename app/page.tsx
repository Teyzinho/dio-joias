'use client';

import HomeNavbar from '@/components/navbar/HomeNavbar';
import Hero from '@/components/Home/Hero';
import Fabrications from '@/components/Home/Fabrications';

export default function Home() {


  return (
    <main>
      <HomeNavbar />
      <Hero />
      <Fabrications />
    </main>
  );
}
