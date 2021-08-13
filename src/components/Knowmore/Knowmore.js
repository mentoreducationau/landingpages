import React , { useState , useEffect } from "react"
import { Title } from "../../styles/Typography.css"
import { KnowmoreContainer, KnowmoreBoxes, KnowmoreBox } from "./Knowmore.css"

const Knowmore = () => {

    const [countup , setCountup] = useState(0)
    const [countsecond , setCountsecond] = useState(0)

    useEffect(() => {
        if (countup < 91) {
          setTimeout(() => setCountup(countup + 1), 100);
        } else {
            console.log('setting')
            setCountup(92);
        }

        if (countsecond < 90) {
          setTimeout(() => setCountsecond(countsecond + 1), 100);
        } else {
          setCountsecond(91);
        }

      },[countup, countsecond]);
  return (
      <>
      <KnowmoreContainer>
        <Title weight={700} color="#707070">
          Want to know more about our <span style={{color:'#FF0000'}}>Mentor Education</span> graduates?
        </Title>
        <KnowmoreBoxes>
            <KnowmoreBox>
                <p>{countup}
                    <span>%</span>
                </p>
                <div>
                Of graduates were employed Or enrolled in further study After training.
                </div>
            </KnowmoreBox>
            <KnowmoreBox>
                <p>{countsecond}
                <span>%</span>

                </p>
                <div>
                Of students were overall Quality of training
                </div>

            </KnowmoreBox>
        </KnowmoreBoxes>

      </KnowmoreContainer>
    </>
  )
}

export default Knowmore
