import React from "react"
import styled from "styled-components"

import JL from "../../images/JL.png"
import MS from "../../images/MS.png"
import DO from "../../images/DO.png"
const WebinarInfo = () => {
  return (
    <MainContainer>
      <h1>Join your hosts</h1>
      <AvatarContainer>
        <AvatarCard>
          <IMG src={MS} alt="James Lynch" />
          <h3>Mark Synclair</h3>
          <h5>Founder Mentor Education</h5>
        </AvatarCard>
        <AvatarCard>
          <IMG src={JL} alt="James Lynch" />
          <h3>James Lynch</h3>
          <h5>Special Projects Officer</h5>
        </AvatarCard>
        <AvatarCard>
          <IMG src={DO} alt="James Lynch" />
          <h3>Danielle O'neal</h3>
          <h5>Education Advice Team Leader</h5>
        </AvatarCard>
      </AvatarContainer>
      <h1>
        Launch or enhance your career with the FNS40217 Certificate IV in
        Accounting and Bookkeeping.
      </h1>
      <p>
        Mentor Education's nationally recognised FNS40217 Certificate IV in
        Accounting and Bookkeeping qualification is tailored to individuals
        either currently working in bookkeeping and accounting roles seeking
        extra skills, knowledge and a formal nationally recognised qualification
        or those preparing to launch a career as a professional bookkeeper,
        payroll officer, accounts clerk or BAS agent. The FNS40217 Certificate
        IV in Accounting and Bookkeeping alongside additional assessment
        requirements as outlined by the Tax Practitioners Board (TPB) meet
        requirements for a course in basic GST/BAS taxation principles that is
        approved by the TPB*. Delivered via online study, this qualification
        introduces students to a broad range of accounting and bookkeeping
        skills including the preparation of financial reports, cloud computing,
        ledger administration and the completion and lodging of business
        activity and instalment activity statements. With more than 20,000
        graduates since 2003, Mentor Education is Australia's largest privately
        owned accounting / bookkeeping, finance and business education provider.
      </p>
    </MainContainer>
  )
}

export default WebinarInfo

const MainContainer = styled.div`
  width: 50vw;
  height: 100%;
  margin-top: 2rem;
  padding-right: 2rem;

  h3 {
    margin: 1rem 0 0.75rem 0;
  }
  p {
    padding-right: 1rem;
  }
`
const AvatarContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
`
const AvatarCard = styled.div`
height: 100%;
width: 25%;
h3 {
    margin: 0;
}
`

const IMG = styled.img`
height: 10rem;
width: 100%;
`