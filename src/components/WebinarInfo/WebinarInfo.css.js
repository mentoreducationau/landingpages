import styled from "styled-components"
import { Container } from '../../styles/ContainerStyles.css'
import { H3 } from "../../styles/Typography.css"


export const MainContainer = styled(Container)`
  margin: 1rem 0 0;
  display: flex;
  justify-content: space-between;
`

export const HostHeadline = styled(H3)`
  position: relative;
  width: fit-content;

  ::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #707070;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 4rem 0;
`
export const AvatarCard = styled.div`
  width: 25%;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr auto 0.2fr;
`