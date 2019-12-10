import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRollAll from '../../components/BlogRollAll'

export default class BlogIndexPage extends React.Component {
  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    const { image } = frontmatter
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${image.childImageSharp.fluid.src})`,
          }}
        >
          <h1
            className="has-text-weight-bold has-background-primary is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: "white",
              lineHeight: "1",
              padding: "0.25em"
            }}
          >
            Featured Properties
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollAll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ListingsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
