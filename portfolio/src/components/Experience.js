import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const ExperienceList = [
  {
    company: "NCR Corporation",
    companyUrl: "https://www.ncr.com/",
    imgSrc: "NCR-logo.png",
    role: "Software Developer",
    type: "Full Time",
    duration: "Jul 2019 - Present",
    description:
      "I'm working on automating building jobs for each component of the team. Also, working on enhancements of the existing components.",
  },
  {
    company: "ServiceNow",
    companyUrl: "https://www.servicenow.com/",
    imgSrc: "servicenow-logo.png",
    role: "Software Engineer",
    type: "Internship",
    duration: "Jan 2019 - Jun 2019",
    description:
      "I worked as full-stack developer with Seismic frontend, ServiceNow platform as backend. I started with design and analysis for a usecase, which eventully was developed as a prototype, then as a fully functional feature.",
  },
  {
    company: "Verzeo",
    companyUrl: "https://verzeo.in/",
    imgSrc: "verzeo-logo.png",
    role: "Frontend Developer",
    type: "Internship(Remote)",
    duration: "May 2018 - Jun 2018",
    description:
      "A team of interns was formed to build frontend for an e-Commerce site. I was the lead of interns team and also frontend developer to build UI for the site.",
  },
]

const ExperienceCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${rhythm(4)};
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.3s ease;
  border: 1px solid #7a7a7a;

  p {
    padding: 0;
    margin: 0;
    font-size: ${rhythm(0.75)};

    a {
      color: ${colors.skyblue};
    }
  }

  .expandable {
    p {
      display: none;
    }
    opacity: 0;
    transition: all 0.3s ease;
    position: relative;
    top: -100%;
  }

  .visible {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  &:hover {
    box-shadow: 1px 2px 20px 2px darkolivegreen;
    max-height: ${rhythm(10)};

    .expandable {
      opacity: 1;
      top: 0;
      p {
        height: auto;
        display: initial;
      }
    }
  }

  .image {
    width: 40%;

    img {
      height: ${rhythm(1.5)};
    }
  }

  .details {
    width: 60%;
    text-alight: left;

    .role {
      font-size: ${rhythm(0.75)};
      font-weight: bold;
      color: ${colors.headings};
    }
    .type {
      font-size: ${rhythm(0.5)};
      color: ${colors.yellow};
    }
    .duration {
      font-size: ${rhythm(0.5)};
      color: palevioletred;
    }

    @media only screen and (max-width: 768px) {
      .role {
        font-size: ${rhythm(0.5)};
      }

      .type .duration {
        font-size: ${rhythm(0.5)};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .image img {
      height: ${rhythm(1)};
    }

    p {
      font-size: ${rhythm(0.5)};
    }
  }
`

const ExperienceCard = ({
  imgSrc,
  company,
  companyUrl,
  role,
  type,
  duration,
  description,
}) => (
  <ExperienceCardDiv>
    <div className="visible">
      <div className="image">
        <img
          alt={`${company} Logo`}
          src={imgSrc}
          style={{ maxHeight: rhythm(2), margin: 0, padding: 0 }}
        />
        <p>
          <a href={companyUrl}>{company}</a>
        </p>
      </div>
      <div className="details">
        <p className="role">{role}</p>
        <p className="type">{type}</p>
        <p className="duration">{duration}</p>
      </div>
    </div>
    <div className="expandable">
      <p className="description">{description}</p>
    </div>
  </ExperienceCardDiv>
)

export default () => (
  <>
    <p>
      I have worked for a number of projects. But, below are the corporate
      experiences that I have.
    </p>
    {ExperienceList.map((props, index) => (
      <React.Fragment key={index}>
        <ExperienceCard {...props} />
        <br />
      </React.Fragment>
    ))}
    <p>
      You can read more about my experiences <a href="/writings">here</a>
    </p>
  </>
)
