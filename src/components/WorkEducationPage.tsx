import React from 'react';
import type { WorkEducationPageProps } from '../types';

const WorkEducationPage: React.FC<WorkEducationPageProps> = ({ 
  items, 
  title, 
  pageNumber 
}) => {
  return (
    <>
      <h1 className="title">{title}</h1>

      <div className="workeduc-box">
        {items.map((item) => (
          <div key={item.id} className="workeduc-content">
            <span className="year">
              <i className="bx bxs-calendar"></i>
              {item.period}
            </span>
            <h3>
              {'position' in item ? item.position : item.degree}
              {' - '}
              {'company' in item ? item.company : item.institution}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      
      <span className="number-page">{pageNumber}</span>
    </>
  );
};

export default WorkEducationPage;