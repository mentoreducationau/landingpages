import styled from 'styled-components'

export const CompanyLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  a {
    flex: 1 0 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    padding: 0 1rem;

    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`