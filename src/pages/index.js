import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { MainLayout } from "../components/layouts/MainLayout"
import { header, btn } from "../styles/home.module.css"

const HomePage = ({ data }) => {
  const bannerImg = getImage(data.file.childImageSharp)
  return (
    <MainLayout
      title={"Home - Porfolio"}
      pageDescription={"Professional Portfolio"}
    >
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={bannerImg} alt={"banner"} />
      </section>
    </MainLayout>
  )
}

export default HomePage

// These query only works with gatsby pages for components we use useStaticQuery

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`
