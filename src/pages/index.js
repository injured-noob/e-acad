import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
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
  div2,
  div3,
  div4,
  head1,
  img1,
  heading2
} from '../components/layout.module.css'


const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome">

    <h1 className={heading}>E Acad</h1>
      <p className={heading2}>The innovative learning site</p>
      <div className={div1}>course


      </div>
      <div className={div2}>
      <StaticImage
      class= {img1}
        alt="Photo of website creator"
        src="../images/gg.JPG"
      />
      </div>

      <div className={div3}><StaticImage
      class= {img1}
        alt="Photo of website creator"
        src="../images/gg.JPG"
      /></div>
      <div className={div4}>course
      </div>
      <div className={div1}>course</div>
      <div className={div2}><StaticImage
        class= {img1}
        alt="Photo of website creator"
        src="../images/gg.JPG"
      /></div>




      </Layout>
)
}

export default IndexPage
