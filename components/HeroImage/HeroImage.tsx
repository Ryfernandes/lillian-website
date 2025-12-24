"use client"

import Image from "next/image";

import wpi_mascot from "./wpi_mascot.png";
import wpi_landscape from "./wpi_landscape.png";
import down_arrow from "./down_arrow.png";
import './HeroImage.css';

interface HeroImageProps {

}

const HeroImage: React.FunctionComponent<HeroImageProps> = () => {
  const reload = () => {
    window.location.reload();
  }
  
  return (
    <div className="hero-main">
      <div className="mascot-container">
        <Image
          src={wpi_mascot}
          alt="WPI Mascot"
          fill
          className="maintain-aspect"
        />
      </div>

      <Image
        src={wpi_landscape}
        alt="WPI Campus"
        fill
        className="object-cover hero-image first-fade"
      />

      <div className="absolute inset-0 bg-black/45 hero-blur first-fade red-border"></div>

      <div className="hero-title-box">
          <div className="hero-title text-shadow no-select clickable" onClick={reload}>
            LILLIAN TERINO
          </div>
          <div className="hero-subtitle text-shadow no-select">
            Computer Science, WPI 2029
          </div>
      </div>

      <div className="scroll-down-box">
        <div className="scroll-down-text text-shadow no-select">
          scroll down
        </div>
        <Image
          src={down_arrow}
          alt="Down Arrow"
          width={40}
          height={0}
        />
      </div>
    </div>
  )
}

export default HeroImage;