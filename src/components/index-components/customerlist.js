import React, {useState} from "react"
import style from "./customerlist.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ccshomeless from "../../videos/ccshomeless.mp4"
import ccsv from "../../videos/ccsv.mp4"
import bvhv from "../../videos/melissa-vbh.mp4"
import VideoPlayer from "../videoPlayer";



const CustomerList = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
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
      customer3: file(relativePath: { eq: "melissa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const videoControl = (videosource) =>{
    setSelectedVideo(videosource.toString()); 
    setShowVideo(true);
  }


  return (
    
    <div className={style.container}>
    {showVideo ? <> <div className={style.close} role="button" tabIndex="0" onKeyPress={() =>''} onClick={() => setShowVideo(false)}> <i className={`fas fa-times`}></i></div> <VideoPlayer video={selectedVideo}></VideoPlayer> </> : null}
    
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
              <a className={style.seemore} href="https://medium.com/pulse-for-good/the-second-duty-of-love-e666982c61bb" target="_blank" rel="noopener noreferrer" >Read Story</a>{" "}
              <div className={style.play} role="button" tabIndex="0" onKeyPress={() =>''} onClick={ (e) => { videoControl(ccshomeless)  }}>
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
            "If you need to gather satisifaction surveys the Pulse kiosks are the way to go."
            <div className={style.details}>
              <div className={style.name}>-Melissa Edgeworth</div>
              <div className={style.title}> Director of Admin Services</div>
            </div>
            <div className={style.buttonHolder}>
            <a className={style.seemore} href="https://medium.com/pulse-for-good/having-the-right-people-at-the-table-8cb9cdc729fb?source=friends_link&sk=2d9cc44aef9892467d313eea1d274460" target="_blank" rel="noopener noreferrer">Read Story</a>{" "}
              <div className={style.play} role="button" tabIndex="0" onKeyPress={() =>''} onClick={(e) => { videoControl(bvhv) }}>
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
            <a className={style.seemore} href="https://medium.com/pulse-for-good/beyond-their-means-3d61ea553103?source=friends_link&sk=3068b40166e680cffeb16bde19f35b9a" target="_blank" rel="noopener noreferrer">Read Story</a>{" "}

             
              <div className={style.play} role="button" tabIndex="0" onKeyPress={() =>''} onClick={(e) => { videoControl(ccsv) }}>
                {" "}
                <i className={`fas fa-play ${style.playicon}`}></i> Play Video{" "}
              </div>
            </div>
          </div>
        </div>

        {/* <div className={style.story}>
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
        </div> */}
      </div>
    </div>
  )
}

export default CustomerList
