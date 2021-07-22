import React from "react"
import {
  CareerSkillSketcontainer,
  CareerSkillSketWrapper,
  CareerSkillImage,
  CareerInfo,
  Image,
} from "./Careerskillset.css"
import { Title } from "../../styles/Typography.css"
import JL from "../../images/hpy.jpeg"

const CareerSkillSket = ({title , subtitle}) => {
  return (
    <CareerSkillSketWrapper>
      <Title weight={700} color="#707070">
        {title}
      </Title>
      <CareerSkillSketcontainer>
        <CareerSkillImage>
          <Image src={JL} />
        </CareerSkillImage>
        <CareerInfo title={subtitle}>
          <h4>Career Skillsets</h4>
          <p className={subtitle}>
            This role looks after the administrative side of contracts within
            project management, with all relevant stakeholders. This involves
            assisting in the contract process from start to finish, and requires
            strong communication skills, as well as attention to detail and
            written skills.
          </p>
        </CareerInfo>
      </CareerSkillSketcontainer>
    </CareerSkillSketWrapper>
  )
}

export default CareerSkillSket
