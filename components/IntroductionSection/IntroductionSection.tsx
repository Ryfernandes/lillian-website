"use client"

import Image from "next/image";
import { useState } from "react";

import './IntroductionSection.css';

import { SOCIAL_LOGOS, LILLIAN_IMAGES } from "@/data";
import MediaButton from "@/components/MediaButton";

interface IntroductionSectionProps {

}

const IntroductionSection: React.FunctionComponent<IntroductionSectionProps> = () => {  
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [oldIndex, setOldIndex] = useState<number>(0);

  const updateIndex = (index: number) => {
    setOldIndex(imageIndex);
    setImageIndex(index);
  }

  return (
    <div className="introduction-main white-border">
      <div className="introduction-left">
        <div className="introduction-left-top">
          <div className="introduction-title no-select">
            Hi! I'm{" "}
            <span 
              className={`introduction-highlight ${imageIndex == 0 ? "introduction-selected" : ""}`}
              onClick={() => updateIndex(0)}
            >
              Lillian
            </span>
          </div>
          <div className="introduction-description">
            I’m a freshman studying Computer Science at{" "}
            <span
              className={`introduction-highlight ${imageIndex == 1 ? "introduction-selected" : ""}`}
              onClick={() => updateIndex(1)}
            >
              Worcester Polytechnic Institute
            </span>
            {" "}in Massachusetts. The tech industry is ever-changing, 
            and I’m here to stick right with it. At my internship this past 
            spring with{" "}
            <span
              className={`introduction-highlight ${imageIndex == 2 ? "introduction-selected" : ""}`}
              onClick={() => updateIndex(2)}
            >
              HitTrax
            </span>
            , I gained experience with computer vision 
            models built for baseball simulations. Now, I’m breaking into 
            natural language processing and{" "}
            <span
              className={`introduction-highlight ${imageIndex == 3 ? "introduction-selected" : ""}`}
              onClick={() => updateIndex(3)}
            >
              LLMs
            </span>
            . Outside of class, I’m a 
            dominant{" "}
            <span
              className={`introduction-highlight ${imageIndex == 4 ? "introduction-selected" : ""}`}
              onClick={() => updateIndex(4)}
            >
              Mario Kart racer
            </span>
            {" "}and master{" "}
            <span
              className={`introduction-highlight ${imageIndex == 5 ? "introduction-selected" : ""}`}
              onClick={() => updateIndex(5)}
            >
              fisher
            </span>
            . My biggest inspiration is my cousin, Ryan.{" "}
            <span
              className={`introduction-highlight ${imageIndex == 6 ? "introduction-selected" : ""}`}
              onClick={() => updateIndex(6)}
            >
              He’s the goat
            </span>
            .
          </div>
        </div>
        <div className="introduction-left-bottom">
          {SOCIAL_LOGOS.map((logo, index) => (
            <MediaButton
              key={index}
              src={logo.src}
              alt={logo.alt}
              link={logo.link}
              size="5vw"
              transition
            />
          ))}
        </div>
      </div>
      <div className="introduction-right">
        <Image
          key={`${oldIndex}a`}
          src={LILLIAN_IMAGES[oldIndex].src}
          alt={LILLIAN_IMAGES[oldIndex].alt}
          fill
          className="object-cover introduction-background-image"
        />
        <Image
          key={`${imageIndex}b`}
          src={LILLIAN_IMAGES[imageIndex].src}
          alt={LILLIAN_IMAGES[imageIndex].alt}
          fill
          className="object-cover introduction-image"
        />
      </div>
    </div>
  )
}

export default IntroductionSection;