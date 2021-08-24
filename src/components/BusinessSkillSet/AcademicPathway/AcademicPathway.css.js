import styled from "styled-components"
import { Title } from "../../../styles/Typography.css"
import { SectionWrapper } from "../../../styles/ContainerStyles.css.js"

export const CardsHeaderWrapper = styled(SectionWrapper)`
  margin-bottom: 40px;
  justify-content: left;

  @media (min-width: 768px) {
    justify-content: center;
  }

`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const CardsHeader = styled(Title)`
  font-size: 22px;
  line-height: 27px;
  text-align: left;
  text-decoration: ${props => (props.isActive ? "underline" : "none")};
  margin: 5px 0;
  cursor: pointer;
  
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 45px;
    padding: 0 2rem;
    margin: 0;
  }
`