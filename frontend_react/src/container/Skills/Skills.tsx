import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import  AppWrap  from '../../wrapper/AppWrap';
import { urlFor, client } from '../../client';
import './Skills.scss';

interface SkillsInterface{
  name:string
  icon:string
  bgColor:string
}

interface WorkDetails{
  name:string
  company:string
  desc:string
}

interface ExperienceInterface{
  year:string
  works:[WorkDetails]
}

const Skills = () => {
  const [experiences, setExperiences] = useState<Array<ExperienceInterface>>([]);
  const [skills, setSkills] = useState<Array<SkillsInterface>>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill,index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`${skill.name}${index}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience,index) => (
            <motion.div
              className="app__skills-exp-item"
              key={`${index}${experience.year}`}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work,index) => (
                  <div  key={`${work.name}${index}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                     
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 1 }}
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  Skills,
  'skills',
  'app__whitebg',
);