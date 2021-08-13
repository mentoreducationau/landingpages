import styled from 'styled-components'

export const StudentsWorkContainer = styled.div`
  width: 99vw;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
  overflow: hidden;
`

export const CompanyLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 0;
  overflow: hidden;

  a {
    flex: 1 0 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
  }
`