import { Link } from "gatsby"
import React from "react"
import { Fragment } from "react"
import {
  FooterContainer,
  Footer,
  RowOne,
  FooterColumns,
  SubscribeForm,
  SubscribeButton,
  FormField,
  RequiredIndicator,
  RequiredIndicatorText,
  FooterCourseList,
  FooterMenuLinks,
  RowTwo,
  Connect,
  AboutMentor,
} from "./footer.css"

import { footerData } from "./footer-data"

import Logo from "../../images/mlogo.png"

const FormFieldComponent = ({
  children,
  label,
  name,
  type,
  required = false,
}) => {
  return (
    <FormField>
      <label for={name}>
        {label} {children}
      </label>
      <input type={type} name={name} id={name} aria-required={required} />
    </FormField>
  )
}

const FooterComponent = () => {
  return (
    <FooterContainer>
      <Footer>
        <RowOne>
          {footerData.map((el, i) => (
            <FooterColumns key={el.id}>
              {/* COLUMN ONE */}

              {i === 0 && (
                <>
                  <FooterMenuLinks>
                    {el.column_one.menu_links.map(({ id, name }) => (
                      <li key={id}>
                        <Link to="#">{name}</Link>
                      </li>
                    ))}
                  </FooterMenuLinks>
                  <br />
                  <br />
                  <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                  <div>
                    <SubscribeForm action="">
                      <div style={{ display: "block" }}>
                        <FormFieldComponent
                          label="Email Address"
                          name="email"
                          type="email"
                          required={true}
                        >
                          <RequiredIndicator>*</RequiredIndicator>
                        </FormFieldComponent>
                        <FormFieldComponent
                          label="First Name"
                          name="firstname"
                          type="text"
                        />
                        <FormFieldComponent
                          label="Last Name"
                          name="lastname"
                          type="text"
                        />
                        <SubscribeButton
                          value="Subscribe"
                          type="submit"
                          name="subscribe"
                        />
                      </div>
                    </SubscribeForm>
                  </div>
                  <RequiredIndicatorText>
                    <RequiredIndicator>*</RequiredIndicator>
                    indicates required
                  </RequiredIndicatorText>
                </>
              )}

              {/* COLUMN TWO */}

              {i === 1 && (
                <>
                  <Link to="#">
                    <h3>{"SCHOOL OF ACCOUNTING & FINANCE"}</h3>
                  </Link>
                  {el.column_two.course_heading.map(
                    ({ id, title, course_list }) => (
                      <Fragment key={id}>
                        <Link to="#">
                          <h4>{title}</h4>
                        </Link>
                        <FooterCourseList>
                          {course_list.map(({ id, name }) => (
                            <li key={id}>
                              <Link to="#">{name}</Link>
                            </li>
                          ))}
                        </FooterCourseList>
                      </Fragment>
                    )
                  )}
                </>
              )}

              {/* COLUMN THREE */}

              {i === 2 && (
                <>
                  {el.column_three.course_heading.map(
                    ({ id, title, course_list }) => (
                      <Fragment key={id}>
                        <h4>{title}</h4>
                        <FooterCourseList>
                          {course_list.map(({ id, name }) => (
                            <li key={id}>
                              <Link to="#">{name}</Link>
                            </li>
                          ))}
                        </FooterCourseList>
                      </Fragment>
                    )
                  )}
                </>
              )}

              {/* COLUMN FOUR */}

              {i === 3 && (
                <>
                  <Link to="#">
                    <h3>{"SCHOOL OF BUSINESS, IT & PROJECT MANAGEMENT"}</h3>
                  </Link>
                  {el.column_four.course_heading.map(
                    ({ id, title, course_list }) => (
                      <Fragment key={id}>
                        <Link to="#">
                          <h4>{title}</h4>
                        </Link>
                        <FooterCourseList>
                          {course_list.map(({ id, name }) => (
                            <li key={id}>
                              <Link to="#">{name}</Link>
                            </li>
                          ))}
                        </FooterCourseList>
                      </Fragment>
                    )
                  )}
                </>
              )}
            </FooterColumns>
          ))}
        </RowOne>
        <RowTwo>
          <Connect>
            <br />
            <h4>GET IN TOUCH WITH US</h4>
            <p>
              Current students:{" "}
              <a href="mailto:service@mentor.edu.au">service@mentor.edu.au</a>
              <br />
            </p>
            <p>
              New enquires:{" "}
              <a href="mailto:courseconsultant@mentor.edu.au">
                courseconsultant@mentor.edu.au
              </a>
            </p>
          </Connect>
          <AboutMentor>
            <br />
            <a href="/">
              <img
                src={Logo}
                alt="Mentor Education"
                title="Mentor Education"
              />
            </a>
            <p>
              Established since 2003, Mentor Education is an Australian
              nationally recognised vocational education and training (VET)
              provider, specialising in the provision of interactive online,
              face-to-face and distance education of nationally accredited
              qualifications, skill sets and non accredited industry
              designations. As a Registered Training Organisation (RTO 21683),
              Mentor Education deliver nationally recognised Australian
              government qualifications, which comply with the Australian
              Qualifications Framework standard.
            </p>
            <p>
              <a href="/">
                Privacy Policy
              </a>
              <a href="/">
                Complaints Policy
              </a>
              <a href="/">
                Refund Policy
              </a>
              <a href="/">
                Accessibility Statement
              </a>
              <a href="/inclusivity-statement">
                Inclusivity Statement
              </a>
              <a href="/">
                Terms &amp; Conditions
              </a>
              <a href="/">
                Disclaimer
              </a>
            </p>
            <p>
              Copyright © 2003 - 2021 Mentor Education Pty Ltd ABN 47 106 065
              847
            </p>
          </AboutMentor>
        </RowTwo>
      </Footer>
    </FooterContainer>
  )
}

export default FooterComponent
