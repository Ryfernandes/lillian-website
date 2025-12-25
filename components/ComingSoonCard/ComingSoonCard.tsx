import './ComingSoonCard.css';

interface ComingSoonCardProps {

}

const ComingSoonCard: React.FunctionComponent<ComingSoonCardProps> = () => {

  return (
    <>
      <div className="coming-soon-card-main">
        <div className="coming-soon-card-text no-select">
          Coming Soon!
        </div>
      </div>
    </>
  )
}

export default ComingSoonCard;