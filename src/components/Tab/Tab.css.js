import styled from "styled-components"

export const TabWrapper = styled.div`
postion: relative;

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

`

export const TabButton = styled.div`
border-top: 2px solid;
border-right: 2px solid;
border-left: 2px solid;
padding: 10px 5%;
color: #707070;
text-transform: uppercase;
font-family: inherit;
font-size: 25px;
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