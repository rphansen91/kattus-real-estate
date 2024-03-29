import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face{font-family:nobel;src:url(https://use.typekit.net/af/8c68f7/00000000000000003b9ae84a/27/l?subset_id=2&fvd=n3&v=3) format("woff2"),url(https://use.typekit.net/af/8c68f7/00000000000000003b9ae84a/27/d?subset_id=2&fvd=n3&v=3) format("woff"),url(https://use.typekit.net/af/8c68f7/00000000000000003b9ae84a/27/a?subset_id=2&fvd=n3&v=3) format("opentype");font-weight:300;font-style:normal;font-stretch:normal;font-display:auto;}
          @font-face{font-family:nobel;src:url(https://use.typekit.net/af/9e0ad7/00000000000000003b9ae84c/27/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/9e0ad7/00000000000000003b9ae84c/27/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/9e0ad7/00000000000000003b9ae84c/27/a?subset_id=2&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;font-stretch:normal;font-display:auto;}
          @font-face{font-family:nobel;src:url(https://use.typekit.net/af/cab4b1/00000000000000003b9ae84e/27/l?subset_id=2&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/cab4b1/00000000000000003b9ae84e/27/d?subset_id=2&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/cab4b1/00000000000000003b9ae84e/27/a?subset_id=2&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;font-stretch:normal;font-display:auto;}
          @font-face{font-family:nobel;src:url(https://use.typekit.net/af/2f8a18/00000000000000003b9ae84b/27/l?subset_id=2&fvd=i3&v=3) format("woff2"),url(https://use.typekit.net/af/2f8a18/00000000000000003b9ae84b/27/d?subset_id=2&fvd=i3&v=3) format("woff"),url(https://use.typekit.net/af/2f8a18/00000000000000003b9ae84b/27/a?subset_id=2&fvd=i3&v=3) format("opentype");font-weight:300;font-style:italic;font-stretch:normal;font-display:auto;}
          @font-face{font-family:nobel;src:url(https://use.typekit.net/af/2d455d/00000000000000003b9ae84f/27/l?subset_id=2&fvd=i7&v=3) format("woff2"),url(https://use.typekit.net/af/2d455d/00000000000000003b9ae84f/27/d?subset_id=2&fvd=i7&v=3) format("woff"),url(https://use.typekit.net/af/2d455d/00000000000000003b9ae84f/27/a?subset_id=2&fvd=i7&v=3) format("opentype");}
        ` }}>
        </style>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
