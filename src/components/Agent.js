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
    <>
      <h4 className="has-text-centered has-text-weight-bold is-bold-light">{name}</h4>
      {!hideImage && !!image.childImageSharp ? (
        <img
          src={image.childImageSharp.fluid.src}
          alt={name}
          style={{
            width: "100%",
            maxWidth: 172,
            margin: "auto",
            display: "block"
          }}
        />
      ) : null}
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
    </>
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
          padding: "1.5rem"
        }}
      >
        <Agent />
      </div>
    </div>
  );
};
