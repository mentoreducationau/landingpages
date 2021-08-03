import styled from "styled-components"

export const KnowmoreContainer = styled.div`
  width: 84vw;
  height: 100%;
  margin-top: 2rem;
  display: block;

  h2 {
    text-align: center;
  }
`
export const KnowmoreBoxes = styled.div`
  display: flex;
  justify-content: center;
  margin-top : 40px;
`

export const KnowmoreBox = styled.div`
  width: 50%;
  text-align: center;

  p {
    font: normal normal 900 18vw/289px Futura;
    letter-spacing: 0px;
    color: #ff0808;
    opacity: 1;

    span {
      font: normal normal 900 117px/152px Futura;
      letter-spacing: 0px;
      color: #ff0000;
      opacity: 1;
      vertical-align: super;
    }
  }

  div {
    font: normal normal 900 40px/52px Futura;
    letter-spacing: 0px;
    color: #707070;
    max-width: 74%;
    margin:auto;
    text-align: left
  }
`
export const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  margin: 1rem 1rem;
  background: white;
  border: 1px darkgrey solid;
  padding-left: 1rem;
  ::placeholder {
    color: black;
  }
`
export const Button = styled.button`
  margin-right: -1rem;
  padding: 0.65rem 2rem;
  float: right;
  background: red;
  color: white;
  border: 0;
  border-radius: 0.1rem;
  font-size: 130%;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`
