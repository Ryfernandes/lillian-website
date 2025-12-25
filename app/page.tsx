"use client"

import { useEffect, useState } from "react";

import "./index.css";

import HeroImage from "@/components/HeroImage";
import IntroductionSection from "@/components/IntroductionSection";
import CourseworkSection from "@/components/CourseworkSection";

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
      <CourseworkSection/>
    </div>
  );
}
