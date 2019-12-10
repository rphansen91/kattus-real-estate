import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6 is-4-desktop" key={post.id}>
              <article
                style={{ padding: 0 }}
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                {post.frontmatter.featuredimage ? (
                  <Link to={post.fields.slug}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </Link>
                ) : null}
                <div style={{ padding: "0.75rem" }}>
                  <header>
                    <p className="post-meta">
                      <Link
                        className="has-text-primary is-bold is-size-4"
                        to={post.fields.slug}
                        style={{ display: 'block', maxHeight: '3em', lineHeight: '1em', overflow: 'hidden', marginBottom: '0.25rem' }}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "listing-post" } } }
          limit: 3
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
                    fluid(maxWidth: 120, quality: 100) {
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
