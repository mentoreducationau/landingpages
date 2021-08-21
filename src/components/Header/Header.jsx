import * as React from "react"
import { TitleContainer, LeftSideContainer, BlurbLeft, BlurbRight } from "./header.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header style={{ height: `7rem` }}>
    <TitleContainer>
      <LeftSideContainer>
        <a href="https://www.mentor.edu.au">
          <StaticImage
            src="../../images/mlogo.png"
            alt="logo"
            placeholder="blurred"
          />
        </a>{" "}
        <span />
        <BlurbLeft>
          Australia's largest privately owned finance, business and accounting
          education provider
        </BlurbLeft>
      </LeftSideContainer>
      <BlurbRight>
        <span>Prefer to speak over the phone? Call us</span>
        <span>
          <StaticImage
            src="../../../static/phone.png"
            alt="phone"
            placeholder="blurred"
          />
          <a href="tel:1800787014">1800 787 014</a>
        </span>
        <span>International: +61 3 91 085 491</span>
      </BlurbRight>
    </TitleContainer>
  </header>
)

export default Header