import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import CourseTemplate from "../templates/CourseTemplate"

const CoursesPage = ({ location }) => (
  <Layout location={location} crumbLabel="Courses">
    <Seo title="Courses" />
    <CourseTemplate />
  </Layout>
)

export default CoursesPage
