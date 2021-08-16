import React, { useState, useEffect } from "react"
import { KnowmoreContainer, KnowmoreBoxes, KnowmoreBox, Percentage } from "./Knowmore.css"
import { ParagraphHeavy, DivHeavy, Title } from "../../styles/Typography.css"

const Knowmore = () => {
  const [countup, setCountup] = useState(0)
  const [countsecond, setCountsecond] = useState(0)

  useEffect(() => {
    if (countup < 91) {
      setTimeout(() => setCountup(countup + 1), 100)
    } else {
      console.log("setting")
      setCountup(92)
    }

    if (countsecond < 90) {
      setTimeout(() => setCountsecond(countsecond + 1), 100)
    } else {
      setCountsecond(91)
    }
  }, [countup, countsecond])
  return (
    <>
      <KnowmoreContainer>
        <Title>
          Want to know more about our{" "}
          <span style={{ color: "#FF0000" }}>Mentor Education</span> graduates?
        </Title>
        <KnowmoreBoxes>
          <KnowmoreBox>
            <ParagraphHeavy>
              {countup}
              <Percentage>%</Percentage>
            </ParagraphHeavy>
            <DivHeavy>
              Of graduates were employed Or enrolled in further study After
              training.
            </DivHeavy>
          </KnowmoreBox>
          <KnowmoreBox>
            <ParagraphHeavy>
              {countsecond}
              <Percentage>%</Percentage>
            </ParagraphHeavy>
            <DivHeavy>Of students were overall Quality of training</DivHeavy>
          </KnowmoreBox>
        </KnowmoreBoxes>
      </KnowmoreContainer>
    </>
  )
}

export default Knowmore
