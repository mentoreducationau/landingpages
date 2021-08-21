import styled from "styled-components"


export const TitleContainer = styled.div`
  margin: 0 auto;
  max-width: 99%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", Arial;
  font-weight: 400;
  font-size: 13px;
  color: #999;
`

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  span {
    height: 50px;
    width: 1px;
    background: #999;
    margin: 0 1rem;
  }

  img {
    margin: 0;
  }
`

export const BlurbLeft = styled.p`
  /* font-size: 14px; */
  max-width: 14rem;
  line-height: 20px;
  /* color: rgba(0, 0, 0, 0.5); */
  margin: 0;
`

export const BlurbRight = styled.div`
  text-align: right;
  line-height: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2px;

    a {
      text-decoration: none;
      font-size: 19px;
      font-weight: bold;
      color: #0071ba;
    }

    .gatsby-image-wrapper {
      margin-right: 0.3rem;
    }
  }
`
