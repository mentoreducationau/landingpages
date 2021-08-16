import React, { useEffect } from "react"
import {
  TabButtonsWrapper,
  TabWrapper,
  TabButton,
  TabInfoWrapper,
  Display,
} from "./Tab.css"
import { courses } from "./testArray"

const Tab = () => {
  const [courseItems, setCourseItems] = React.useState([])
  const [activeTab, setActiveTab] = React.useState()

  useEffect(() => {
    const newCourseItems = []
    for (let [key, value] of Object.entries(courses[0])) {
      newCourseItems.push(`${value}`)
      setCourseItems(newCourseItems)
      setActiveTab(Object.keys(courses[0])[0])
    }
  },[])
 
  return (
    <TabWrapper>
      <TabButtonsWrapper>
        {Object.keys(courses[0]).map((name, i) => {
          return (
            <TabButton
              id={i + 1}
              key={i}
              onClick={() => setActiveTab(name)}
              className={
                activeTab === name ? "active" : ""
              }
            >
              {name
                .replace(/([A-Z])/g, " $1")
                .trim()
                .trim()}
            </TabButton>
          )
        })}
      </TabButtonsWrapper>
      
      <TabInfoWrapper>
        {courses &&
          courseItems.map((course, i) => (
            <Display
              activeTab={activeTab}
              id={Object.keys(courses[0])[i]}
              key={i}
            >
              {course}
            </Display>
          ))}
      </TabInfoWrapper>
    </TabWrapper>
  )
}

export default Tab
