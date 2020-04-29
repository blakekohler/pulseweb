import React, { useState }  from "react"
import style from "./press.module.scss"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
// images
import pinkLogo from "../images/pulselogo-pink.png"
import pulseLogo from "../images/pulselogo.png"
import whiteLogo from "../images/pulselogo-white.png"

const Press = () => {
    
  const items = [
    {
      itemTitle: "Forbes: Things Change When Providers Gather Feedback From Homeless People They Serve",
      itemType: "news",
      iconCode: "fas fa-quote-right",
      preview:
        "In the homeless services arena, feedback isn’t always sought. When it is, it often is done by the staff. How honest is the feedback about the services likely to be when the service provider conducts the survey, watching as you answer questions on a written form?",
      link: "http://www.forbes.com/sites/devinthorpe/2019/11/29/things-change-when-providers-gather-feedback-from-homeless-people-they-serve",
      date: new Date(2020, 1, 20),
      external: true,
    },
    // {
    //   itemTitle: "National Health Foundation in LA & Pulse Partner",
    //   itemType: "release",
    //   iconCode: "fas fa-newspaper",
    //   preview:
    //     "Pulse for Good is excited to ",
    //   link: "/contact",
    //   date: new Date(2020, 1, 20),
    //   external: false,
    // },
    {
        itemTitle: "Salt Lake Tribune: Catholic Community Services, Pulse for Good aim to improve experience for homeless clients ",
        itemType: "news",
        iconCode: "fas fa-quote-right",
        preview:
          "Catholic Community Services was the first homeless service provider in Utah to try the new technology, which is part of a growing effort across the state and in the Salt Lake City area’s three new homeless resource centers to give homeless people a voice they’ve often lacked in the services that affect them.",
        link:
          "https://www.sltrib.com/news/politics/2020/01/03/catholic-community/",
        date: new Date(2020, 1, 20),
        external: true,
      },
    {
      itemTitle: "For Good: How the UX process helped us do something positive",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "When we started Pulse For Good, a client-satisfaction solution geared towards the homeless population and the service providers that serve them, we knew we wanted to do something different.",

      link:
        "https://medium.com/pulse-for-good/for-good-how-the-ux-process-helped-us-do-something-positive-6f48b2498bbc",
      date: new Date(2019, 11, 14),
      external: true,
    },

    {
        itemTitle: "City Weekly: Taking Clients' Vitals ",
        itemType: "news",
        iconCode: "fas fa-quote-right",
        preview:
          "New digital survey gives homeless people a say in how five Utah organizations can better tailor their services.",
  
        link:
          "https://www.cityweekly.net/utah/taking-clients-vitals/Content?oid=11167537",
        date: new Date(2018, 10, 3),
        external: true,
      },
      
    {
      itemTitle: "The Vulnerability Gap",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "What happens when you are afraid to give your honest opinion? The fear that is introduced creates a new class of people.",

      link:
        "https://medium.com/pulse-for-good/the-vulnerability-gap-8d9058664b73?source=friends_link&sk=fbe7122c0e4c758c20ffd4bbc6af8493",
      date: new Date(2020, 1, 31),
      external: true,
    },
    {
      itemTitle: "How to run an organizational Pulse check",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "Every organization needs to take time to reflect on how it has been doing. This time of reflection and retrospection can propel an organization to greater heights.",

      link:
        "https://medium.com/pulse-for-good/how-to-run-an-organizational-pulse-check-4efbbf336817?source=friends_link&sk=27c9cbc6db2990d13ef0bbb02331b433",
      date: new Date(2020, 3, 9,),
      external: true,
    },
    {
      itemTitle: "Pulse For Good finalist for Utah Innovation Award",
      itemType: "release",
      iconCode: "far fa-newspaper",
      preview:
        "A committee of more than 80 experts from Utah’s private industry, government and academic communities voted on winners and finalists.",

      link:
        "https://www.utahinnovationawards.com/post/finalists-announced-in-17th-annual-utah-innovation-awards",
      date: new Date(2019, 9, 3),
      external: true,
    },
    {
      itemTitle: "Pulse For Good selected for Kiln Startup Showcase",
      itemType: "release",
      iconCode: "far fa-newspaper",
      preview:
        "Pulse was honored to be selected by Kiln to share our story at the 2020 Silicon Slopes Tech Summit.",

      link:
        "https://kiln.co/news/kiln-startup-showcase-accepted-applicants",
      date: new Date(2020, 1, 17),
      external: true,
    },
    {
      itemTitle: "Sanitizing a Pulse Kiosk",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "A kiosk can be a dirty place and vulnerable individuals are also those with the highest risk when it comes to communicative illness. Making sure your kiosks are properly and often sanitized can ensure that your clients, patients, and staff are protected from the germs that take up residence on your kiosks.",

      link:
        "https://medium.com/pulse-for-good/sanitizing-a-pulse-kiosk-e5e507565876?source=friends_link&sk=d05bfc6759e50fc99d911236dd81338e",
      date: new Date(2020, 3, 9),
      external: true,
    },
    {
      itemTitle: "Beyond their means",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "How one organization understood the value of volunteers and invested in them",
      link:
        "https://medium.com/pulse-for-good/beyond-their-means-3d61ea553103?source=friends_link&sk=3068b40166e680cffeb16bde19f35b9a",
      date: new Date(2020, 1, 28),
      external: true,
    },
    {
      itemTitle: "Small changes lead to big results",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "Make feedback normal. Not a performance review.",
      link:
        "https://medium.com/pulse-for-good/small-changes-lead-to-big-results-ca60c2d551b7?source=friends_link&sk=82224c6972c408d5812c870970b9b625",
      date: new Date(2019, 11, 14),
      external: true,
    },
    {
      itemTitle: "The second duty of love",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "How one service provider is changing the world, one shower curtain at a time",
      link:
        "https://medium.com/pulse-for-good/the-second-duty-of-love-e666982c61bb?source=friends_link&sk=ff4529f7e99ee47e0096d2aefd2b9939",
      date: new Date(2018, 12, 29),
      external: true,
    },
    {
      itemTitle: "Continuous Feedback & Social Services",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "How can we gather better customer satisfaction from the consumers of social services?",
      link:
        "https://medium.com/pulse-for-good/continuous-feedback-social-services-4cb676b77420?source=friends_link&sk=ede074201138498ac81fc9578c9b4759",
      date: new Date(2018, 9, 26),
      external: true,
    },
    {
      itemTitle: "Benefits of Social Startups",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "At Pulse For Good, we are a social startup, we hope to use technology not to drive profits, through trendy “likes” but through lasting change and betterment of society.",
      link:
        "https://medium.com/pulse-for-good/benefits-of-social-startups-a2bd04a4ce9?source=friends_link&sk=d7e06752b99cf7eddd2c3abb2f04187c",
      date: new Date(2018, 2, 24),
      external: true,
    },
    
   
  ];
  items.sort((a, b) => b.date - a.date);
  const [itemList, setItemList] = useState(items);
  const [itemType, setItemType] = useState('all');
const filterItem = (type) =>{
    if(type){
        if(type === 'all'){
            setItemList(items);
            setItemType('all');
        }
        else{
            setItemList(items.filter(x => x.itemType === type));
            setItemType(type);
        }
    }
   
}


  return (
    <Layout>
      <SEO title="Press" description="Hear what people are saying about Pulse For Good" />
      <Container>
        <div className={style.pressContainer}>
          <h1>Press / Media</h1>
          <div className={style.itemList}>
            {/* <div className={style.itemFilters}>
              <div className={style.readmore}>Show All</div>
              <div className={style.readmore}>
                {" "}
                <i className={`fas fa-paragraph ${style.padright}`}></i>Blog
                Posts
              </div>
              <div className={style.readmore}>
                {" "}
                <i className={`fas fa-quote-right ${style.padright}`}></i> In
                the News
              </div>
              <div className={style.readmore}>
                <i className={`far fa-newspaper ${style.padright}`}></i>Press
                Releases
              </div>
            </div> */}
            <div className={style.row}>
              <div className={style.itemHolder}>
              <div className={style.itemFilters}>
              <div className={itemType === 'all' ? style.active : style.readmore} onKeyDown={(e) => filterItem('all')} onClick={(e) => filterItem('all')}>Show All</div>
              <div className={itemType === 'blog' ? style.active : style.readmore} onClick={(e) => filterItem('blog')}>
                {" "}
                <i className={`fas fa-paragraph ${style.padright}`}></i>Blog
                Posts
              </div>
              <div className={itemType === 'news' ? style.active : style.readmore} onClick={(e) => filterItem('news')} >
                {" "}
                <i className={`fas fa-quote-right ${style.padright}`}></i> In
                the News
              </div>
              <div className={itemType === 'release' ? style.active : style.readmore} onClick={(e) => filterItem('release')}>
                <i className={`far fa-newspaper ${style.padright}`}></i>Press
                Releases
              </div>
            </div>
                {itemList.map(i => {
                  return (
                    <div className={style.item}>
                      <div className={style.itemHeader}>
                        <i
                          className={`${i.iconCode} ${style.padright} ${style.icon}`}
                        ></i>{" "}
                        {i.itemTitle}
                      </div>
                      <div className={style.itemPreview}>{i.preview}</div>
                      {i.external ? (
                        <a href={i.link} target="_blank" className={style.readmore}>
                          Read More
                        </a>
                      ) : (
                        <Link to={i.link} className={style.readmore}>
                          Read More
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className={style.mediaKit}>
              <div className={style.mediaKitHeader}>Media Kit</div>
              <div className={style.mediaKitsub}>About</div>
              <div className={style.info}>Pulse For Good is a social good company dedicated to helping the voices of vulnerable people change the way organizations, communities and groups provide services. We utilize technology to help individuals have a safe place to share feedback about the services they receive without fear of retribution.
</div>
              <div className={style.mediaKitsub}>Logos</div>
              <img className={style.logo} src={pulseLogo}/>
              <img className={style.logo} src={pinkLogo}/>
              <img className={style.whitelogo} src={whiteLogo}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Press
