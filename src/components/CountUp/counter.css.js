import styled from 'styled-components'

export const CounterText = styled.h2`
  padding: 0;
  margin: 0;
  width: fit-content;
  height: fit-content;
  color: ${props => (props.color ? props.color : "#ff0808")};
  font-size: ${props => (props.size ? props.size : "18vw")};
  font-family: ${props => (props.font ? props.font : "Futura")};
  font-weight: ${props => (props.weight ? props.weight : "900")};
  font: normal normal;
  letter-spacing: 0px;
`