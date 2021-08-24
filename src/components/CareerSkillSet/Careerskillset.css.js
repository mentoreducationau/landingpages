import styled from "styled-components"

export const CareerSkillSetcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const CareerInfo = styled.div`
  margin: auto;
  
  @media (min-width: 768px) {
    padding: 0 0 0 35px;
    max-width: 36%;
  }
`