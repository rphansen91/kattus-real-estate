import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default ({ hideImage }) => {
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
      <p className="has-text-center">{name}</p>
      {!hideImage && !!image.childImageSharp ? <img src={image.childImageSharp.fluid.src} alt={name} style={{ width: '100%', maxWidth: 172, margin: 'auto', display: 'block' }} /> : null}
      <a className="has-text-center has-text-primary" title="phone" href={`tel:${phone}`}>
        {phone}
      </a>
      <p className="has-text-center" style={{ margin: 0 }}>CalDRE: {caldre}</p>
      <a className="has-text-center has-text-primary" title="email" href={`mailto:${email}`}>
        {email}
      </a>
    </>
  );
};
