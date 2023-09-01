"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { BannerInterface } from "@/types";

import axios from "axios";
import { useEffect, useState } from "react";
import Fabrications from "@/components/Fabrications";

export default function Home() {
  const [banner, setBanner] = useState<null | BannerInterface>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://job.risestudio.com.br/pages/home?featured=true"
        )
        setBanner(response.data.data.page.banner)
      } catch (error) {}
    };
    fetchPosts()
  }, []);

  return (
    <main>

      <Navbar />

      {
        banner && <Hero banner={banner} />
      }

      <Fabrications />

    </main>
  );
}
