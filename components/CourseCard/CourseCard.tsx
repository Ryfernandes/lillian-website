import { totalmem } from 'os';
import './CourseCard.css';

interface CourseCardProps {
  title: string;
  grade: string;
  bullets: string[];
  goForward: () => void;
  goBack: () => void;
  index: number;
  total: number;
}

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  title, grade, bullets, goForward, goBack, index, total
}) => {

  return (
    <>
      <div className="course-card-main">
        <div className="course-card-top">
          <div className="course-card-title">
            {title}
          </div>
          <div className="course-card-grade no-select">
            {grade}
          </div>
        </div>
        <div className="course-card-middle">
          <ul>
            {bullets.map((bullet, index) => (
              <li key={index}>
                -{">"} {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="course-card-bottom">
          <div className="course-card-arrows">
            <div 
              className="course-card-prev course-card-clickable no-select"
              onClick={goBack}
            >
              {"<"}
            </div>
            <div
              className="course-card-next course-card-clickable no-select"
              onClick={goForward}
            >
              {">"}
            </div>
          </div>
          <div className="course-card-progress">
            {index + 1} / {total}
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard;