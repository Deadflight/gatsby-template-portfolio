import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export const Navbar = () => {
  const { site } = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
