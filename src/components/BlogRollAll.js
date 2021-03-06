import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { BlogRoll } from './BlogRoll'

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollAllQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "listing-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 140)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 540, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)