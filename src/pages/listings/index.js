import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('/img/skyline.jpg')`,
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
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
