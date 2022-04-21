import React from "react"
import { Navbar } from "../Navbar"
import "../../styles/globals.css"
import Helmet from "react-helmet"

export const MainLayout = ({ children, title, pageDescription }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={pageDescription} />
        <html lang="en" />
      </Helmet>
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
        <footer>
          <p>Copyright Web Warrior</p>
        </footer>
      </div>
    </>
  )
}
