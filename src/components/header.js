import * as React from "react"
import styled from "styled-components"
import logo from "../images/mlogo.png"

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

const TitleContainer = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LeftSideContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  display: flex;
`

const BlurbLeft = styled.p`
  font-size: 0.7rem;
  max-width: 14rem;
  line-height: 20px;
  padding: 1rem 1rem 0 1rem;
`

const BlurbRight = styled.p`
  font-size: 0.7rem;
  max-width: 12rem;
  text-align: right;
  line-height: 20px;
  padding: 1rem 1rem 0 1rem;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
