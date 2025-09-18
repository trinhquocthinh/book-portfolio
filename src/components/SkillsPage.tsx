import React from 'react';
import type { SkillsPageProps } from '../types';

const SkillsPage: React.FC<SkillsPageProps> = ({ skillCategories, pageNumber }) => {
  return (
    <>
      <h1 className="title">My Skills</h1>

      <div className="skills-box">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-content">
            <h3>{category.category}</h3>
            <div className="content">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex}>
                  <i className={skill.icon}></i>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <span className="number-page">{pageNumber}</span>
    </>
  );
};

export default SkillsPage;