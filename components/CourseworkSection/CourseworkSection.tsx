"use client"

import { useState, useEffect } from "react";

import './CourseworkSection.css';

import BubbleDisplay from '@/components/BubbleDisplay';
import CourseCard from '@/components/CourseCard';
import ComingSoonCard from "@/components/ComingSoonCard";
import { COURSES, TERM_DETAILS, CURRENT_YEAR, CURRENT_TERM } from "@/data";

interface CourseworkSectionProps {

}

const CourseworkSection: React.FunctionComponent<CourseworkSectionProps> = () => {
  const [yearIndex, setYearIndex] = useState<number>(CURRENT_YEAR - 1);
  const [termIndex, setTermIndex] = useState<number>(CURRENT_TERM - 1);
  const [courseIndex, setCourseIndex] = useState<number>(0);

  const num_courses = COURSES[yearIndex][termIndex].length;

  const goForward = () => {
    setCourseIndex(prev => (prev + 1) % num_courses);
  }

  const goBack = () => {
    setCourseIndex(prev => (prev - 1) % num_courses);
  }

  const changeYear = (index: number) => {
    setCourseIndex(0);
    setYearIndex(index);
  }

  const changeTerm = (index: number) => {
    setCourseIndex(0);
    setTermIndex(index);
  }

  return (
    <div className="coursework-main">
      <div className="coursework-top">
        <div className="coursework-title no-select">
          Coursework
        </div>
        <div className="coursework-controls">
          <BubbleDisplay
            tag="Year"
            index={yearIndex}
            setIndex={changeYear}
          />
          <BubbleDisplay
            tag="Term"
            index={termIndex}
            setIndex={changeTerm}
          />
        </div>
      </div>
      <div className="coursework-bottom">
        {num_courses > 0 ? (
          <CourseCard
            key={`${yearIndex}-${termIndex}`}
            title={COURSES[yearIndex][termIndex][courseIndex].title}
            grade={COURSES[yearIndex][termIndex][courseIndex].grade}
            bullets={COURSES[yearIndex][termIndex][courseIndex].bullets}
            goBack={goBack}
            goForward={goForward}
            index={courseIndex}
            total={num_courses}
          />
        ) : (
          <ComingSoonCard
            key={`${yearIndex}-${termIndex}`}
          />
        )}
        <div className="coursework-term-description">
          <div className="coursework-term-title">
            {TERM_DETAILS[yearIndex * 4 + termIndex].title}
          </div>
          <div className="coursework-term-text">
            {TERM_DETAILS[yearIndex * 4 + termIndex].description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseworkSection