import React from 'react'
import { studentsData } from './student-data'

import { CompanyLogosWrapper, StudentsWorkContainer } from './studentswork.css'
import { Title } from '../../styles/Typography.css'

const StudentsWork = () => {
    return (
      <StudentsWorkContainer>
        <Title>Where our graduates are now employed</Title>
        <CompanyLogosWrapper>
          {studentsData.map(({ id, companyName, link, imgSrc }) => (
            <div key={id}>
              <a href={link} target="_blank">  
                <img src={imgSrc} alt={companyName} />
              </a>
            </div>
          ))}
        </CompanyLogosWrapper>
      </StudentsWorkContainer>
    )
}

export default StudentsWork