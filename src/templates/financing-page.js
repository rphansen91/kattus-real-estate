import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { AgentSidebar } from "../components/Agent";

export const FinancingPageTemplate = ({ title, content, contentComponent }) => {
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

FinancingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const FinancingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FinancingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

FinancingPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default FinancingPage;

export const financingPageQuery = graphql`
  query FinancingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
