import React from "react"
import { H3 } from "../../styles/Typography.css"
import { ConsultBannerContainer } from "./index.css"

const FreeConsultBanner = () => {
  return (
    <ConsultBannerContainer>
      <H3 course>Excite Your Potential!</H3>
      <H3 course>
        Special October Intake Offers now open. <br />
        <strong>Must end Thursday September 30th 2021 @ 4.00pm AEST.</strong>
      </H3>
    </ConsultBannerContainer>
  )
}

export default FreeConsultBanner
