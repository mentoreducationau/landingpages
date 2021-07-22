import React from "react"
import {
  TabButtonsWrapper,
  TabWrapper,
  TabButton,
  TabInfoWrapper,
} from "./Tab.css"

const Tab = () => {
  return (
    <TabWrapper>
      <TabButtonsWrapper>
        <TabButton className="active">Tab</TabButton>
        <TabButton>Tab</TabButton>
        <TabButton>Tab</TabButton>
        <TabButton>Tab</TabButton>
        <TabButton>Tab</TabButton>
      </TabButtonsWrapper>
      <TabInfoWrapper>
        <b>Lorem Ipsum is simply dummy text of th</b>e printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        <a> essentially unchanged. It</a> was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </TabInfoWrapper>
    </TabWrapper>
  )
}

export default Tab
