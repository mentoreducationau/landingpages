import React from "react"
import CountUp from "../CountUp/counter"

import {
  KnowmoreContainer,
  KnowmoreBoxes,
  KnowmoreBox,
  Percentage,
} from "./Knowmore.css"

import { DivHeavy, Title } from "../../styles/Typography.css"

const Knowmore = () => {
  return (
    <KnowmoreContainer>
      <Title>
        Want to know more about our{" "}
        <span style={{ color: "#FF0000" }}>Mentor Education</span> graduates?
      </Title>
      <KnowmoreBoxes>
        <KnowmoreBox>
          <div>
            <CountUp>92</CountUp>
            <Percentage>%</Percentage>
          </div>
          <DivHeavy>
            Of graduates were employed or enrolled in further study after
            training.
          </DivHeavy>
        </KnowmoreBox>
        <KnowmoreBox>
          <div>
            <CountUp>91</CountUp>
            <Percentage>%</Percentage>
          </div>
          <DivHeavy>Of students were overall quality of training</DivHeavy>
        </KnowmoreBox>
      </KnowmoreBoxes>
    </KnowmoreContainer>
  )
}

export default Knowmore
