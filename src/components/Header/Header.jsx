import * as React from "react"
import { TitleContainer, LeftSideContainer, BlurbLeft, BlurbRight } from "./header.css"
import logo from "../../images/mlogo.png"


const Header = ({ siteTitle }) => (
  <header
    style={{
      width: `99vw`,
      height: `7rem`
    }}
  >
    <TitleContainer>
      <LeftSideContainer>
        <a href="https://www.mentor.edu.au">
          <img src={logo} alt="" />
        </a>{" "}
        <BlurbLeft>
          Australia's largest privately owned finance; business and accounting
          education provider
        </BlurbLeft>
      </LeftSideContainer>
      <BlurbRight>
        Prefer to speak over the phone? Call us 1800 787 014 International: +61
        3 91 085 491
      </BlurbRight>
    </TitleContainer>
  </header>
)

export default Header