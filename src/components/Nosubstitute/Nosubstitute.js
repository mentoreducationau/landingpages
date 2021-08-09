import React from "react"

import {
  NosubstituteContainer,
  FoundersDetailGrid,
  QuotedPara,
  FounderImage,
  FounderDetails
} from "./Nosubstitute.css"

import { QuoteSvg } from '../../images/svg/quotations'
import { Title } from "../../styles/Typography.css"

const Nosubsitute = () => {
  return (
    <NosubstituteContainer>
      <Title weight={700} color="#707070">
        There is no substitute for{" "}
        <span style={{ color: "#FF1010" }}>quality</span> training
      </Title>
      <FoundersDetailGrid>
        <QuotedPara>
          <QuoteSvg left />
          OVER 15 YEARS AS A TRUSTED EDUCATOR IS A PROUD LEGACY THAT WE AIM TO
          UPHOLD TODAY AND FOR THE NEXT GENERATION OF FINANCIAL AND BUSINESS
          PROFESSIONALS
          <QuoteSvg right />
        </QuotedPara>
        <FounderImage src="/mark-sinclair.jpg" alt="mark-sinclair" />
        <FounderDetails>
          <h3>Mark Sinclair</h3>
          <span>Founder of Mentor Education PTY LTD</span>
          <p>
            We concentrate on what we do best. We believe our quality training
            will provide you with the outcomes you desire, be it a better job,
            an increased income, increased skills or gaining professional
            recognition.<br></br>
            <br></br> Concentrating on Accounting, Bookkeeping, Business,
            Financial Planning, Mortgage Broking and RG146 Compliance because it
            is what we know best and it is our passion. We are just as
            passionate about you our students; we want you to succeed. Work with
            us and we will get you through to graduation.<br></br>
            <br></br> We subscribe to best practice assessment standards
            ensuring you graduate at the leading edge of your field. You will be
            equipped with the skill and knowledge gained from an
            industry-leading training course that will fast track your finance,
            accounting and business services career.
          </p>
        </FounderDetails>
      </FoundersDetailGrid>
    </NosubstituteContainer>
  )
}

export default Nosubsitute



