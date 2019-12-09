import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { AgentSidebar } from "../components/Agent";

export const CommunitiesPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns flex-row-reverse-md">
              <div className="column">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}
                  </h2>
                  <PageContent className="content" content={content} />
                </div>
              </div>
              <AgentSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CommunitiesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const CommunitiesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CommunitiesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

CommunitiesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CommunitiesPage;

export const aboutPageQuery = graphql`
  query CommunitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
