import React from "react"
import style from "./customerlist.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CustomerList = () => {
  const data = useStaticQuery(graphql`
    query {
      customer1: file(relativePath: { eq: "mattm-small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      customer2: file(relativePath: { eq: "brit-small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      customer3: file(relativePath: { eq: "court-small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={style.container}>
    <h1 className={style.trusted}>Trusted by:</h1>
      <div className={style.storyHolder}>
        <div className={style.story}>
          <div className={style.customerPicHolder}>
            <Img
              className={style.customerPic}
              fluid={data.customer1.childImageSharp.fluid}
            />
          </div>
          <div className={style.testimonial}>
            "Getting daily responses from our guest using services gives us a
            snapshot into their lives."
            <div className={style.details}>
              <div className={style.name}>-Matt Melville</div>
              <div className={style.title}>Director of Homeless Services</div>
            </div>
            <div className={style.buttonHolder}>
              <div className={style.seemore}>Read Story</div>{" "}
              <div className={style.play}>
                {" "}
                <i className={`fas fa-play ${style.playicon}`}></i> Play Video{" "}
              </div>
            </div>
          </div>
        </div>

        <div className={style.story}>
          <div className={style.customerPicHolder}>
            <Img
              className={style.customerPic}
              fluid={data.customer2.childImageSharp.fluid}
            />
          </div>
          <div className={style.testimonial}>
            "..allows us to really make the changes to make sure that people have a positive experience.."
            <div className={style.details}>
              <div className={style.name}>-Brittany Moulton</div>
              <div className={style.title}> Engagement Coordinator</div>
            </div>
            <div className={style.buttonHolder}>
              <div className={style.seemore}>Read Story</div>{" "}
              <div className={style.play}>
                {" "}
                <i className={`fas fa-play ${style.playicon}`}></i> Play Video{" "}
              </div>
            </div>
          </div>
        </div>

        <div className={style.story}>
          <div className={style.customerPicHolder}>
            <Img
              className={style.customerPic}
              fluid={data.customer3.childImageSharp.fluid}
            />
          </div>
          <div className={style.testimonial}>
            "(Pulse For Good) has been an amazing tool for us."
            <div className={style.details}>
              <div className={style.name}>-Courtney Cooper</div>
              <div className={style.title}>Data Analyst</div>
            </div>
            <div className={style.buttonHolder}>
              <a className={style.seemore} target="_blank" href="https://medium.com/pulse-for-good/the-second-duty-of-love-e666982c61bb">Read Story</a>{" "}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerList
