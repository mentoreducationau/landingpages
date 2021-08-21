import styled, { keyframes } from "styled-components"

export const TabWrapper = styled.div`
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  justify-items: stretch;
  width: 100%;
  padding: 0px 0.2%;
  align-items: stretch;
`

export const TabButtonsWrapper = styled.div`
  /* padding: 0px 0.2%; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* max-width: 90%; */
  margin: 0 1rem;
`

export const TabButton = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: 4px solid #707070;
  margin-left: -4px;
  margin-top: -4px;
  /* border-top: 2px solid;
  border-right: 2px solid;
  border-left: 2px solid; */
  padding: 10px 5%;
  margin-bottom: 0;
  color: #707070;
  cursor: pointer;

  &:hover,
  &.active {
    background: #707070;
    border: 2px solid #707070;
    color: #fff;
  }
`

export const TabInfoWrapper = styled.div`
  padding: 1.5rem;
  border: 3px solid;
  margin-top: -3px;
  border-color: rgba(112,112,112,0.45);
`
const rotate = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: inline;
    opacity: 1;
    height: auto;
  }
`
export const TabContentContainer = styled.div`
  opacity: ${props => (props.activeTab === props.id ? 1 : 0)};
  display: ${props => (props.activeTab === props.id ? "inline" : "none ")};
`
export const Display = styled(TabContentContainer)`
  animation: ${rotate} 0.2s linear;
`
