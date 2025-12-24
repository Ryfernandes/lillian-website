"use client"

import { use, useEffect, useState } from "react";

import "./index.css";

import HeroImage from "@/components/HeroImage";
import IntroductionSection from "@/components/IntroductionSection";

export default function Home() {
  const [scrollState, setScrollState] = useState<string>("no-scroll");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollState("scroll");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`main-container ${scrollState}`}>
      <HeroImage/>
      <IntroductionSection/>
    </div>
  );
}
