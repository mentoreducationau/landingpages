import React from 'react'
import { studentsData } from './student-data'

import { StudentsWorkContainer, CompanyLogosWrapper } from "./studentswork.css"
import { Title } from '../../styles/Typography.css'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const StudentsWork = () => {
    const {
      allFile: { nodes: logos },
    } = useStaticQuery(graphql`
      query MyQuery {
        allFile(filter: { relativeDirectory: { eq: "company-logos" } }) {
          nodes {
            name
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                width: 100
              )
            }
          }
        }
      }
    `)
    return (
      <StudentsWorkContainer>
        <Title>Where our graduates are now employed</Title>
        <CompanyLogosWrapper>
          {studentsData.map(({ id, companyName, link, imgSrc }) => {
            const img = logos.filter(
              image => image.relativePath === `company-logos/${imgSrc}`
            )
            return (
                <a key={id} href={link} target="_blank" rel="noreferrer noopener">
                  <GatsbyImage
                    image={img.length && img[0].childImageSharp.gatsbyImageData}
                    alt={companyName}
                  />
                </a>
            )
          })}
        </CompanyLogosWrapper>
      </StudentsWorkContainer>
    )
}

export default StudentsWork