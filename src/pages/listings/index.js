import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/skyline.jpg')`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundSize: 'cover'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
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
