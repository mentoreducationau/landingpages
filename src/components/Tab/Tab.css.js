import styled, {keyframes} from "styled-components"

export const TabWrapper = styled.div`
position: relative;
flex-wrap: wrap;
align-items: stretch;
justify-items: stretch;
width: 100%;
padding: 0px .2%;
align-items: stretch;

h3 {
  margin: 1rem 0 0.75rem 0;
}
p {
  padding-right: 1rem;
}
`

export const TabButtonsWrapper = styled.div`
padding: 0px .2%;
display: flex;
justify-content: center;


flex-wrap: wrap;
`

export const TabButton = styled.div`
display: flex;
flex-grow: 1;
align-items: center;
justify-content: center;
border-top: 2px solid;
border-right: 2px solid;
border-left: 2px solid;
padding: 10px 5%;
margin-bottom: 0;
margin-left: -.1rem;
color: #707070;
font-family: inherit;
font-size: 18px;
font-weight: 900;
cursor: pointer;

&:hover , &.active {
    background: #707070;
    border: 2px solid #707070;
    color: #fff;
}
`

export const TabInfoWrapper = styled.div`
padding: 90px 35px;
border: 4px solid #707070;

a {
    color:#F70000;
    cursor: pointer;
}

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
`;
export const TabContentContainer = styled.div`
opacity: ${props => props.activeTab === props.id ? 1 : 0};
display: ${props => props.activeTab === props.id ? 'inline' : 'none '};
`
export const Display = styled(TabContentContainer)`
  animation: ${rotate} .2s linear;
`;