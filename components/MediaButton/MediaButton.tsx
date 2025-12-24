import Image, { StaticImageData } from "next/image";

import './MediaButton.css';

interface MediaButtonProps {
  src: StaticImageData;
  alt: string;
  link: string;
  size: string; 
  transition?: boolean;
}

const MediaButton: React.FunctionComponent<MediaButtonProps> = ({ src, alt, link, size, transition }) => {
  return (
    <a 
      href={link}  
      className="media-link"
      target="_blank"
      rel="noopener noreferrer"  
    >
      <div className={`media-button ${transition ? "media-transition" : ""}`} style={{ width: size, height: size }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover media-image"
        />
      </div>
    </a>
  )
}

export default MediaButton;