import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navLinkText2,
  navLinkText3,
  siteTitle,
  div1,
  footer1,
  footer2,
  footer3
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title

        }
      }
    }
  `)
  return (
    <main className={container}>
      <title>{pageTitle}|{data.site.siteMetadata.title}</title>


      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText3}>
          <StaticImage

            alt="E Acad"
            src="e acad.jpg"
          />
          </Link>
        </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText2}>
              E Acad
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Contact
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Courses
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Careers
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>


      {children}
      <div className={footer1}>
      <div className={footer2}>
        <p className={footer3}>contact@eacad.org</p>
        <p style={{color:'whitesmoke'}}><u>E Acad</u></p>
        <p style={{color:'whitesmoke'}}><u>Become a Teacher</u></p>
        <p></p>
        <p style={{color:'whitesmoke'}}><u>Our Partners</u></p>
        <p style={{color:'whitesmoke'}}><u>Testimonials</u></p>
        <p style={{color:'whitesmoke'}}><u>FAQs</u></p>
      </div>

      </div>


    </main>
  )
}

export default Layout
