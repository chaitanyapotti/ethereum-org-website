import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styled from "styled-components"

import Sidebar from "../components/Sidebar"

const shortcodes = { Link } // Provide common components here

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1280px;
  display: flex;
  /* flex-direction: column;
  align-items: center;
  justify-content: center; */
`

const ContentContainer = styled.div`
  max-width: 600px;
`

const StaticPage = ({ data: { mdx } }) => {
  return (
    <Container>
      <ContentContainer>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </ContentContainer>
      <Sidebar items={mdx.tableOfContents.items} />
    </Container>
  )
}

export const pageQuery = graphql`
  query StaticPageQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      body
      tableOfContents
    }
  }
`

export default StaticPage
