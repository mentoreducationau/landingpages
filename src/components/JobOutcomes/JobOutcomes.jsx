import React from "react"
import { jobRoles } from "./JobArray"

import {
  JobOutcomesContainer,
  JobDetailWrapper,
  JobTitleWrapper,
  SeparatorLine,
  JobListItem,
  QualificationsList,
  QaulificationLink,
  JobTitle,
} from "./JobOutcomes.css"

const JobOutcomes = () => {
  const [displayJob, setDisplayJob] = React.useState(0)

  return (
    <JobOutcomesContainer>
      <JobDetailWrapper>
        <JobTitleWrapper>
          <JobTitle>Job Role</JobTitle>
          <SeparatorLine width="100%" />
        </JobTitleWrapper>
        <QualificationsList>
          {jobRoles.map((role, i) => (
            <JobListItem
              key={i}
              id={i}
              displayJob={displayJob}
              onMouseEnter={() => setDisplayJob(i)}
            >
              <p>{role.role.charAt(0).toUpperCase() + role.role.slice(1)}</p>
              <SeparatorLine width="70%" height="2px" id={i} displayJob={displayJob} />
            </JobListItem>
          ))}
        </QualificationsList>
      </JobDetailWrapper>
      <JobDetailWrapper>
        <JobTitleWrapper>
          <JobTitle>Avg. Salary</JobTitle>
          <SeparatorLine width="50%" />
        </JobTitleWrapper>
        <QualificationsList>
          {jobRoles.map((role, i) => (
            <JobListItem
              key={i}
              id={i}
              displayJob={displayJob}
              onMouseEnter={() => setDisplayJob(i)}
            >
              <p>${(role.salary - (role.salary % 1000)) / 1000}k per year</p>
              <SeparatorLine width="30%" height="2px" id={i} displayJob={displayJob} />
            </JobListItem>
          ))}
        </QualificationsList>
      </JobDetailWrapper>
      <JobDetailWrapper last>
        <JobTitleWrapper>
          <JobTitle>Required Qualification/s</JobTitle>
        </JobTitleWrapper>
        {jobRoles.map((role, i) => (
          <QualificationsList key={i} displayJob={displayJob} id={i}>
            {role.requiredQaulifications.map((qualification, i) => (
              <JobListItem key={i}>
                <QaulificationLink
                  href={`https://www.mentor.edu.au/courses/${qualification.link}`}
                  target="_blank"
                >
                  {qualification.name}
                </QaulificationLink>
              </JobListItem>
            ))}
          </QualificationsList>
        ))}
      </JobDetailWrapper>
    </JobOutcomesContainer>
  )
}

export default JobOutcomes
