import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { MainLayout } from "../components/layouts/MainLayout"
import * as styles from "../styles/project-details.module.css"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  const projectImg = getImage(featuredImg.childImageSharp)
  return (
    <MainLayout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={projectImg} alt={title} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query ProjectSlug($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default ProjectDetails
