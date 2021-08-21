import styled from "styled-components"
import { Title } from "../../../styles/Typography.css"

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CardsHeader = styled(Title)`
  font-size: 36px;
  line-height: 45px;
  padding: 0 2rem;
  text-decoration: ${props => props.isActive ? "underline" : "none"};
  cursor: pointer;
`