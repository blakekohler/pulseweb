import React, { useState } from "react"
import style from "./customerMain.module.scss"
import { Link } from "gatsby"
import sth from "../../images/sth.png"
import wv from "../../images/westvirginia.png"
import vbh from "../../images/vbh.png"
import switchpoint from "../../images/switchpoint.png"
import roadhome from "../../images/roadhome.png"
import nnp from "../../images/nnp.png"
import lantern from "../../images/lanternhouse.png"
import capsa from "../../images/capsa.png"
import OverviewVid from "../../videos/overview-verysmall.mp4"
import matt from "../../images/mattsquare.jpg"

const CustomerMain = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [responseCount, setResponseCount] = useState(Math.floor((Math.random() * 1000) + 15000));


  return (
    <div className={style.container}>
      <h1 className={style.bigboy}>Over {responseCount} voices heard</h1>
      <div className={style.customerList}>
        <img src={sth} />
        <img src={vbh} />
        <img src={switchpoint} />
        <img src={wv} />
        <img src={roadhome} />
        <img src={nnp} />
        <img src={lantern} />
        <img src={capsa} />
      </div>
      <div className={style.storyHolder}>
        <div className={style.left}>
        {/* CSS */}
          <div className={style.story}>
            <h2 className={style.partnername}>
              Catholic Community Services - SLC
            </h2>

            <video className={style.clientVideo} controls>
              <source src={OverviewVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h4>The second duy of love</h4>
            <p className={style.preview}>
              Paul Tillich, a twentieth century philosopher and theologian, once
              said that, “the first duty of love is to listen.” I’ve come to
              believe Mr. Tillich. However, I’ve learned something else along
              the way: If listening is the first duty of love, responding is the
              second. In 2017, myself and a group of friends created a company
              to help Homeless Service Providers do just that; we help them
              listen. We created Pulse For Good as a platform for the voice of
              vulnerable populations. In business speak we created a
              client-satisfaction tracking solution. In regular terms, we
              created a listening tool. We felt that if we could provide service
              providers with a tool to help them listen then we would be making
              a difference. And we did, to an extent.
            </p>
            <Link className={style.readmore} to="/thanks">Read More</Link>
          </div>
{/* VBH */}
<div className={style.story}>
            <h2 className={style.partnername}>
              Catholic Community Services - SLC
            </h2>

            <video className={style.clientVideo} controls>
              <source src={OverviewVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h4>The second duy of love</h4>
            <p className={style.preview}>
              Paul Tillich, a twentieth century philosopher and theologian, once
              said that, “the first duty of love is to listen.” I’ve come to
              believe Mr. Tillich. However, I’ve learned something else along
              the way: If listening is the first duty of love, responding is the
              second. In 2017, myself and a group of friends created a company
              to help Homeless Service Providers do just that; we help them
              listen. We created Pulse For Good as a platform for the voice of
              vulnerable populations. In business speak we created a
              client-satisfaction tracking solution. In regular terms, we
              created a listening tool. We felt that if we could provide service
              providers with a tool to help them listen then we would be making
              a difference. And we did, to an extent.
            </p>
            <Link className={style.readmore}>Read More</Link>
          </div>



        </div>
        <div className={style.right}>
       <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img className={style.customerPic}  src={matt}/>
          </div>
          <div className={style.testimonial}>
            "Getting daily responses from our guest using services gives us a
            snapshot into their lives."
            <div className={style.details}>
              <div className={style.name}>-Matt Melville</div>
              <div className={style.title}>Director of Homeless Services</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img className={style.customerPic}  src={matt}/>
          </div>
          <div className={style.testimonial}>
            "Getting daily responses from our guest using services gives us a
            snapshot into their lives."
            <div className={style.details}>
              <div className={style.name}>-Matt Melville</div>
              <div className={style.title}>Director of Homeless Services</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img className={style.customerPic}  src={matt}/>
          </div>
          <div className={style.testimonial}>
            "Getting daily responses from our guest using services gives us a
            snapshot into their lives."
            <div className={style.details}>
              <div className={style.name}>-Matt Melville</div>
              <div className={style.title}>Director of Homeless Services</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img className={style.customerPic}  src={matt}/>
          </div>
          <div className={style.testimonial}>
            "Getting daily responses from our guest using services gives us a
            snapshot into their lives."
            <div className={style.details}>
              <div className={style.name}>-Matt Melville</div>
              <div className={style.title}>Director of Homeless Services</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img className={style.customerPic}  src={matt}/>
          </div>
          <div className={style.testimonial}>
            "Getting daily responses from our guest using services gives us a
            snapshot into their lives."
            <div className={style.details}>
              <div className={style.name}>-Matt Melville</div>
              <div className={style.title}>Director of Homeless Services</div>
            </div>
            
          </div>
        </div>





       </div>
      </div>
    </div>
  )
}
export default CustomerMain
