import styled from "styled-components"

export const FooterContainer = styled.div`
  padding: 70px 0;
  clear: both;
`

export const Footer = styled.div`
  line-height: 20px;
  max-width: 1130px;
  padding: 0 25px;
  margin: auto;
  font-family: "Open Sans";

  h1,
  h2,
  h3,
  h4 {
    color: #333;
  }

  h4 {
    color: #666;
    font-size: 14px;
    margin: 20px 0 0;
  }

  h4,
  h2 {
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.17em;
  }

  ul,
  li {
    color: grey;
    font-size: 14px;
  }

  li {
    list-style-type: none;
    margin-top: 10px;
  }

  a {
    color: #666;
    text-decoration: none;

    :hover {
      text-decoration: underline #0071ba;
    }
  }

  a:visited {
    color: #666;
    font-weight: 700;
  }
`
export const RowOne = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const FooterColumns = styled.div`
  /* border: 1px solid green; */
  width: 24%;
  float: left;
  margin-left: 4%;
  margin-bottom: 20px;

  :nth-of-type(1) {
    width: 16%;
    margin-left: 0;

    a {
        :hover {
            text-decoration: underline #666;
        }
    }
  }

  h3 {
    margin-top: 10px;
  }
`

export const FooterMenuLinks = styled.ul`
  margin: 0;
  padding: 0;

  li {
    font-weight: 700;
    :nth-of-type(1) {
      margin-top: 20px;
    }

    a {
      text-transform: uppercase;
    }
  }
`

export const FooterCourseList = styled.ul`
  margin: 5px 0 0 15px;
  padding: 0;

  li {
    position: relative;
    padding-left: 11px;
    color: grey;
    font-size: 14px;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 0;
      height: 0;
      border-top: 3px solid transparent;
      border-left: 6px solid #cc4a28;
      border-bottom: 3px solid transparent;
      display: inline-block;
    }

    a {
      color: grey;
      font-weight: 400;

      :hover {
          text-decoration: underline #666;
      }
    }
  }
`

export const SubscribeForm = styled.form`
  display: block;
  position: relative;
  text-align: left;
  padding: 10px 0 10px 3%;
`

export const RequiredIndicator = styled.span`
  color: #e85c41;
  font-size: 150%;
  font-weight: normal;
  position: relative;
  top: 5px;
`

export const FormField = styled.div`
  clear: left;
  position: relative;
  width: 96%;
  padding-bottom: 3%;
  min-height: 50px;

  label {
    display: block;
    margin-bottom: 3px;
  }

  input {
    display: block;
    width: 100%;
    padding: 8px 0;
    text-indent: 2%;
    border: 1px solid #abb0b2;
    border-radius: 3px;
  }
`

export const RequiredIndicatorText = styled.div`
  text-align: right;
  font-size: 11px;
  margin-right: 4%;
`

export const SubscribeButton = styled.input`
  clear: both;
  background-color: #aaa;
  border: 0 none;
  border-radius: 4px;
  transition: all 0.23s ease-in-out 0s;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: normal;
  height: 32px;
  line-height: 32px;
  margin: 0 5px 10px 0;
  padding: 0 22px;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  width: auto;

  :hover {
    background-color: #777;
  }
`

export const RowTwo = styled.div`
  display: block;
  font-family: Futura Medium;

  p {
    color: grey;
    font-size: 16px;
    line-height: 24px;
  }

  a {
      :hover {
          text-decoration: underline #666;
      }
  }
`

export const Connect = styled.div`
  width: 24%;
  float: right;

  h4 {
    color: #666;
    font-size: 14px;
    margin: 20px 0 0;
  }
`

export const AboutMentor = styled.div`
  width: 70%;
  margin-right: 5%;
  float: left;

  a {
    margin-right: 15px;
  }
`