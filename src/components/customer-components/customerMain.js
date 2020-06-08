import React, { useState } from "react"
import style from "./customerMain.module.scss"
import austin from "../../images/austin.png"
import wv from "../../images/westvirginia.png"
import vbh from "../../images/vbh.png"
import switchpoint from "../../images/switchpoint.png"
import roadhome from "../../images/roadhome.png"
import nnp from "../../images/nnp.png"
import ccsinc from "../../images/ccsinc.png"
import sth from "../../images/sth.png"
import nhf from "../../images/nhf.png"
import capsa from "../../images/capsa.png"
import ccshomeless from "../../videos/ccshomeless.mp4"
import vbhvideo from "../../videos/vbhvideo.mp4"

import cssv from "../../videos/ccsv.mp4"
import matt from "../../images/mattsquare.jpg"
import court from "../../images/court.png"
import greg from "../../images/greg.jpg"
import ccsutah from "../../images/ccsUtah.jpg"
import iain from "../../images/iain-small.jpg"
import kim from "../../images/kim.jpg"
import julie from "../../images/julie.jpg"
import melissa from "../../images/melissa.jpg"
import becky from "../../images/becky.jpg"

const CustomerMain = () => {
  const responseCount = useState(Math.floor((Math.random() * 1000) + 21000));
  return (
    <div className={style.container}>
      <h1 className={style.bigboy}>Over {responseCount} voices heard</h1>
      <div className={style.customerList}>
        <img alt="Austin Street Clinic" src={austin} />
        <img alt="Shelter the Homeless" src={sth} />
        <img alt="Valley Behavioral Health" src={vbh} />
        <img alt="Switchpoint" src={switchpoint} />
        <img alt="West Virginia Coalition to End Homelessness" src={wv} />
        <img alt="Neighborhood Nonprofit" src={nnp} />
        <img alt="The Road Home" src={roadhome} />
        <img alt="Neighborhood housgin" src={nnp} />
        <img alt="National Health Foundation" src={nhf} />
        <img alt="Community Crisis Services Inc" src={ccsinc} />
        <img alt="CAPSA" src={capsa} />
      </div>
      <div className={style.storyHolder}>
        <div className={style.left}>
        {/* CSS */}
          <div className={style.story}>
            <h2 className={style.partnername}>
              Catholic Community Services Homeless Division - SLC
            </h2>

            <video className={style.clientVideo} controls>
              <source src={ccshomeless} type="video/mp4" />
              <track src="../../videos/ccscap.vtt" kind="captions" srclang="en" label="English"/>
              Your browser does not support the video tag.
            </video>
            <h4>The second duy of love</h4>
            <p className={style.preview}>
              Paul Tillich, a twentieth century philosopher and theologian, once
              said that, “the first duty of love is to listen.” I’ve come to
              believe Mr. Tillich. However, I’ve learned something else along
              the way: If listening is the first duty of love, responding is the
              second. 
              <br></br>
              <br></br>In 2017, myself and a group of friends created a company
              to help Homeless Service Providers do just that; we help them
              listen. We created Pulse For Good as a platform for the voice of
              vulnerable populations. In business speak we created a
              client-satisfaction tracking solution. In regular terms, we
              created a listening tool. We felt that if we could provide service
              providers with a tool to help them listen then we would be making
              a difference. And we did, to an extent.
            </p>
            <a className={style.readmore} href="https://medium.com/pulse-for-good/the-second-duty-of-love-e666982c61bb">Read More</a>
          </div>
{/* VBH */}
<div className={style.story}>
            <h2 className={style.partnername}>
             Valley Behavioral Health 
            </h2>

            <video className={style.clientVideo} controls>
              <source src={vbhvideo} type="video/mp4" />
              <track src="../../videos/valleycap.vtt" kind="captions" srclang="en" label="English"/>
              Your browser does not support the video tag.
            </video>
            <h4>Having the right people at the table</h4>
            <p className={style.preview}>
            When we started Pulse a few years ago we had a seemingly simple goal in mind: we wanted to help vulnerable populations have their voices heard. Our solution consisted of physical kiosks mounted in locations where vulnerable populations are served. We wanted to use our experience in software development, usability, and human-computer interaction to do something good. We recognized that individuals in vulnerable situations struggled to give honest feedback out of fear of repercussions for their responses.
             
            </p>
            <a className={style.readmore} href="https://medium.com/pulse-for-good/the-second-duty-of-love-e666982c61bb">Read More</a>
          </div>
<div className={style.story}>
            <h2 className={style.partnername}>
              Catholic Community Services Volunteers - SLC
            </h2>

            <video className={style.clientVideo} controls>
              <source src={cssv} type="video/mp4" />
              <track src="../../videos/ccsVolcap.vtt" kind="captions" srclang="en" label="English"/>
              Your browser does not support the video tag.
            </video>
            <h4>Beyond their means</h4>
            <p className={style.preview}>
            In 2018, Catholic Community Services in Salt Lake City, Utah began using Pulse to gather client feedback — a system designed to gather client feedback from those individuals using the services provided by CCS. Each of those individuals were going through the harrowing experience of homelessness.
            </p>
            <a className={style.readmore} href="https://medium.com/pulse-for-good/beyond-their-means-3d61ea553103">Read More</a>
          </div>



        </div>
        <div className={style.right}>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="becky" className={style.customerPic}  src={becky}/>
          </div>
          <div className={style.testimonial}>
          "Pulse For Good has allowed us opportunities to see deep down to see where there are wins that have been missed in the past."
            <div className={style.details}>
              <div className={style.name}>-Becky Brown </div>
              <div className={style.title}>COO - Valley Behavioral Health</div>
            </div>
            
          </div>
        </div>
       <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="matt" className={style.customerPic}  src={matt}/>
          </div>
          <div className={style.testimonial}>
            "Working with Pulse for Good has been an incredibly positive experience for us at Catholic Community Services of Utah (CCS) and has changed the way we think about client feedback"
            <div className={style.details}>
              <div className={style.name}>-Matt Melville</div>
              <div className={style.title}>Director of Homeless Services</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="greg" className={style.customerPic}  src={greg}/>
          </div>
          <div className={style.testimonial}>
            "These surveys have been amazing. Everyone should be required to do these. It humanizes the problem by providing a way to hear stories and empathize with the homeless individual.."
            <div className={style.details}>
              <div className={style.name}>-Greg Hughes</div>
              <div className={style.title}>Speaker of the House
State Of Utah House of Representatives</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="CCS Utah" className={style.customerPic}  src={ccsutah}/>
          </div>
          <div className={style.testimonial}>
            "We are loving working with @PulseForGood to find out how our client's are receiving our services and what we can do better to help everyone that walks in our door reach self-sufficiency!"
            <div className={style.details}>
              <div className={style.name}>-CCS Utah</div>
              <div className={style.title}></div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="Melissa" className={style.customerPic}  src={melissa}/>
          </div>
          <div className={style.testimonial}>
          "If you need to gather satisifaction surveys the Pulse kiosks are the way to go."
            <div className={style.details}>
              <div className={style.name}>-Melissa Edgeworth </div>
              <div className={style.title}>Director of Admin Services - Valley Behavioral Health</div>
            </div>
            
          </div>
        </div>
     
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="Iain" className={style.customerPic}  src={iain}/>
          </div>
          <div className={style.testimonial}>
            "If you are serious about feedback from your service users or the organizations you fund, and you want a successful platform for doing so, then I strongly recommend you check out Pulse for Good"
            <div className={style.details}>
              <div className={style.name}>-Iain De Jong</div>
              <div className={style.title}>CEO - 
Orgcode</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="Court" className={style.customerPic}  src={court}/>
          </div>
          <div className={style.testimonial}>
            "It has been an amazing tool for us."
            <div className={style.details}>
              <div className={style.name}>-Courtney Cooper </div>
              <div className={style.title}>AmeriCorps VISTA</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="Kim" className={style.customerPic}  src={kim}/>
          </div>
          <div className={style.testimonial}>
            "It is a wonderful survey tool created by Pulse for Good that allows us to get feedback from clients as they leave their appointments. It takes less than 2 minutes for them to complete (on an iPad placed in a private location in the office) and collects data on how they felt about our services. It is very helpful in tracking outcomes (and for providing funders data on program services used.)"
            <div className={style.details}>
              <div className={style.name}>-Kim Datwyler</div>
              <div className={style.title}>Executive Director
Neightborhood Nonprofit Housing</div>
            </div>
            
          </div>
        </div>
        <div className={style.smallstory}>
          <div className={style.customerPicHolder}>
           <img alt="Julie" className={style.customerPic}  src={julie}/>
          </div>
          <div className={style.testimonial}>
          "(Pulse) creates a safe environment, gets in time data, and cuts out extra administrative time."
            <div className={style.details}>
              <div className={style.name}>-Julie Rael </div>
              <div className={style.title}>CCO- Valley Behavioral Health</div>
            </div>
            
          </div>
        </div>



       </div>
      </div>
    </div>
  )
}
export default CustomerMain
