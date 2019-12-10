import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const Agent = ({ hideImage }) => {
  const data = useStaticQuery(graphql`
    query Agent {
      markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
        frontmatter {
          agent {
            name
            email
            phone
            caldre
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    name,
    phone,
    email,
    image,
    caldre
  } = data.markdownRemark.frontmatter.agent;
  return (
    <div>
      <div className="media" style={{ alignItems: "center" }}>
        {!hideImage && !!image.childImageSharp ? (
          <figure className="image" style={{ width: 128 }}>
            <img
              src={image.childImageSharp.fluid.src}
              alt={name}
            />
          </figure>
        ) : null}
        <div className="media-content">
          <h4
            className="title is-4 has-text-centered has-text-weight-bold is-bold-light"
            style={{ marginBottom: "0.5rem" }}
          >
            {name}
          </h4>
          <a
            className="is-block has-text-centered has-text-primary"
            title="phone"
            href={`tel:${phone}`}
          >
            {phone}
          </a>
          <p className="has-text-centered" style={{ margin: 0 }}>
            CalDRE: {caldre}
          </p>
          <a
            className="is-block has-text-centered has-text-primary"
            title="email"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export const AgentSidebar = () => {
  return (
    <div style={{ paddingRight: "0.75rem" }}>
      <h3 className="has-text-weight-semibold is-size-2 is-hidden-mobile">
        &nbsp;
      </h3>
      <div
        className="notification toc"
        style={{
          padding: "1.5rem",
          paddingRight: 0
        }}
      >
        <Agent />
      </div>
    </div>
  );
};
