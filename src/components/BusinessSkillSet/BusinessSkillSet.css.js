import styled from "styled-components"

export const BusinessSkillSetcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const BusinessInfo = styled.div`
  @media (min-width: 768px) {
    padding: 0 35px;
    max-width: 40%;
  }
`