import styled from "styled-components"

export const EnrolContainer = styled.div`
  margin-top: 1rem;
  height: 100%;
  text-align: center;

  a {
    color: #cc4a28;
  }
`
export const PriceContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const PriceButton = styled.button`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 38px;
  background: #cc4a28;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 70%;
  height: 50px;
  text-transform: uppercase;
  cursor: pointer;
`