import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { MainLayout } from "../../components/layouts/MainLayout"
import { portfolio, projects } from "../../styles/projects.module.css"

const ProjectsPage = ({ data }) => {
  const projectsData = data.projectsData.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <MainLayout
      title={"Projects - Portfolio"}
      pageDescription={"Professional Portfolio"}
    >
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {projectsData.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <GatsbyImage
                  key={project.id}
                  image={getImage(project.frontmatter.thumb.childImageSharp)}
                  alt={project.frontmatter.title}
                />
                <h4>{project.frontmatter.title}</h4>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query projectsPage {
    projectsData: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

export default ProjectsPage
