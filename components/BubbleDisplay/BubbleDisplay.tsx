import './BubbleDisplay.css';

interface BubbleDisplayProps {
  tag: string;
  index: number;
  setIndex: (index: number) => void;
}

const BubbleDisplay: React.FunctionComponent<BubbleDisplayProps> = ({ tag, index, setIndex }) => {
  return (
    <div className="bubble-display-main">
      <div className="bubble-display-text no-select">
        {tag}:
      </div>
      <div className="bubble-display-indicators">
        {Array(4).fill(0).map((_, i) => (
          <div 
            key={i} 
            className={`bubble-display-bubble ${index >= i ? 'bubble-display-filled' : ''}`}
            onClick={() => {setIndex(i)}}
          />
        ))}
      </div>
    </div>
  )
}

export default BubbleDisplay