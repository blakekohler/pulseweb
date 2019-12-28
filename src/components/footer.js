import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./footer.module.scss"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <footer>
        <div className={style.callToAction}>
        <div className={style.left}>
        <div className={style.headline}>Ready to get started?</div>
        <div className={style.subline}>Schedule a 15 minute demo </div>
        </div>
        <div className={style.right}>
        <div className={style.demo}>Schedule Demo</div>
</div>

        </div>
         <div className={style.container}>
         <div className={style.column}></div>
         <div className={style.column}></div>
         <div className={style.column}></div>
         <div className={style.column}></div>
        </div>
       
    </footer>
  )
}


export default Footer
