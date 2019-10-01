import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import QueryString from "query-string"

import Layout from "../components/Layout"
import { StyledPost, StyledSummary } from "../components/styles/post"
import { StyledCrumb } from "../components/Layout/styles"
import SEO from "../components/SEO"
import { colors } from "../utils/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import { rhythm } from "../utils/typography"

const StyledFilterSummary = styled.div`
  display: flex;
  align-items: left;

  span {
    border-radius: 25%;
  }
`

const StyledFilter = styled.div`
  margin-bottom: ${rhythm(3)};

  .text-query {
    height: ${rhythm(1.5)};

    input {
      width: 100%;
      border-radius: 6px 0 0 6px;
    }

    button {
      width: ${rhythm(1.5)};
      background: #fff;
      border-radius: 0 6px 6px 0;
      // padding: calc(${rhythm(1.5)} * 0.25) 0;
    }

    display: flex;
  }
`

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? colors.skyblue
        : isFocused
        ? colors.blue
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? true
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: colors.green,
      },
    }
  },
  multiValue: styles => {
    return {
      ...styles,
      backgroundColor: colors.text,
    }
  },
  multiValueLabel: styles => ({
    ...styles,
    color: colors.background,
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: colors.blue,
    ":hover": {
      backgroundColor: colors.red,
      color: "white",
    },
  }),
}

class Filter extends React.Component {
  render() {
    const {
      options,
      setQuery,
      searchWritings,
      select,
      setSelection,
    } = this.props
    return (
      <>
        <StyledFilter>
          <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            defaultValue={options.filter(
              ({ value }) => select.indexOf(value) !== -1
            )}
            isMulti
            options={options}
            styles={colourStyles}
            onChange={(selections, action) => {
              const selection =
                selections != null ? selections.map(({ value }) => value) : []
              setSelection(selection, searchWritings)
            }}
          />
          <div className="text-query">
            <input
              type="text"
              name="query"
              value={this.props.query || ""}
              onChange={e => {
                setQuery(e.target.value, searchWritings)
              }}
              onSubmit={searchWritings}
            />
            <button onClick={searchWritings}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ margin: "auto 0", opacity: 0.3 }}
              />
            </button>
          </div>
        </StyledFilter>
        <StyledFilterSummary></StyledFilterSummary>
      </>
    )
  }
}

const BreadCrumbHeader = props => {
  const {
    options,
    title,
    showFilter,
    data,
    select,
    setQuery,
    setSelection,
    query,
    searchWritings,
  } = props
  return (
    <>
      <StyledCrumb>
        <span>
          <Link to={"/"}>{title}</Link>
        </span>{" "}
        <span>{"/"}</span>
        <span>
          <Link to={"/writings"}>{"writings"}</Link>
        </span>
        <span>{">"}</span>
      </StyledCrumb>
      {showFilter && (
        <Filter
          options={options}
          data={data}
          select={select}
          searchWritings={searchWritings}
          setQuery={setQuery}
          setSelection={setSelection}
          query={query}
        />
      )}
    </>
  )
}

export default class WritingsIndex extends React.Component {
  state = {
    posts: [],
    query: "",
    selection: [],
    select: ["title", "description"],
  }

  checkForKeyword = ({ node }) => {
    const projSelectionCheck =
        this.state.selection.indexOf("Type: Project") !== -1,
      projCheck = node.frontmatter.type === "project"
    console.log(projCheck, projSelectionCheck, node)
    if (projSelectionCheck && !projCheck) {
      return false
    } else {
      for (let key of this.state.selection) {
        if (this.state.query === "") return true
        else
          for (let query of this.state.query.split(/[\s,.]+/)) {
            const subStrCheck =
              node.frontmatter.hasOwnProperty(key) &&
              node.frontmatter[key]
                .toLowerCase()
                .search(query.toLowerCase()) !== -1
            if (subStrCheck) return true
          }
      }
    }
    return false
  }

  getOptionsFromProps = () => {
    return Object.getOwnPropertyNames(
      this.props.data.allMdx.edges[0].node.frontmatter
    )
      .filter(val => val !== "type")
      .concat(["Type: Project"])
      .map(key => ({
        value: key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        color: colors.background,
      }))
  }

  static getDerivedStateFromProps(props, state) {
    let select = []

    const filterOptions = QueryString.parse(props.location.search).filters
      ? QueryString.parse(props.location.search).filters.split(",")
      : []

    for (let filter of filterOptions) {
      if (state.select.indexOf(filter) === -1) select.push(filter)
    }
    return {
      select: state.select.concat(select),
      selection:
        state.selection.length !== 0
          ? state.selection
          : state.select.concat(select),
    }
  }

  searchWritings = () => {
    const data = this.props.data.allMdx.edges
    let posts = data.filter(this.checkForKeyword)
    this.setState({ posts: posts }, () => {})
  }

  componentDidMount() {
    this.searchWritings()
  }

  renderPosts() {
    return this.state.posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <StyledPost
          key={node.fields.slug}
          style={{
            cursor: "pointer",
          }}
          onClick={() => (window.location = node.fields.slug)}
        >
          <h3>
            <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.excerpt,
            }}
          />
        </StyledPost>
      )
    })
  }

  render() {
    const { data, location } = this.props
    const title = data.site.siteMetadata.title
    //fetching all available options
    const options = this.getOptionsFromProps()
    return (
      <Layout location={location}>
        <SEO frontmatter={{ title: "Writings", slug: "/writings" }} />
        <BreadCrumbHeader
          title={title}
          options={options}
          data={data}
          showFilter={
            location.pathname === "/writings/" ||
            location.pathname === "/writings"
          }
          searchWritings={this.searchWritings}
          query={this.state.query}
          setQuery={(query, cb) => this.setState({ query }, cb)}
          setSelection={(selection, cb) => this.setState({ selection }, cb)}
          select={this.state.select}
          location={location}
        />
        {this.renderPosts()}
        <hr />
        <SummaryFooter />
      </Layout>
    )
  }
}

const SummaryFooter = () => (
  <StyledSummary style={{ color: colors.goldenred }}>
    <strong>Reached the end.</strong> That&#39;s it for now.
    <br />
    Checkout this place after some time, may be I&#39;ll have new content ready
    for you.
  </StyledSummary>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            type
            technologies
          }
        }
      }
    }
  }
`
