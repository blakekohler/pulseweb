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
      itemTitle: "Pulse selected for Kiln Startup Showcase",
      itemType: "news",
      iconCode: "fas fa-quote-right",
      preview:
        "Pulse for Good was honored to be selected as one of the startups selected by Kiln for the Startup Showcase at Silicon Slopes",
      link: "/contact",
      date: new Date(2020, 1, 20),
      external: false,
    },
    {
      itemTitle: "National Health Foundation in LA & Pulse Partner",
      itemType: "release",
      iconCode: "fas fa-newspaper",
      preview:
        "Pulse for Good was honored to be selected as one of the startups selected by Kiln for the Startup Showcase at Silicon Slopes",
      link: "/contact",
      date: new Date(2020, 1, 20),
      external: false,
    },
    {
      itemTitle: "For Good: How the UX process helped us do something positive",
      itemType: "blog",
      iconCode: "fas fa-paragraph",
      preview:
        "Pulse for Good was honored to be selected as one of the startups selected by Kiln for the Startup Showcase at Silicon Slopes",

      link:
        "https://medium.com/pulse-for-good/for-good-how-the-ux-process-helped-us-do-something-positive-6f48b2498bbc",
      date: new Date(2020, 1, 20),
      external: true,
    },
  ];
  const [itemList, setItemList] = useState(items);
  const [itemType, setItemType] = useState('all');
const filterItem = (type) =>{
    if(type){
        if(type == 'all'){
            setItemList(items);
            setItemType('all');
        }
        else{
            setItemList(items.filter(x => x.itemType == type));
            setItemType(type);
        }
    }
   
}


  return (
    <Layout>
      <SEO title="Press" />
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
              <div className={itemType == 'all' ? style.active : style.readmore} onClick={(e) => filterItem('all')}>Show All</div>
              <div className={itemType == 'blog' ? style.active : style.readmore} onClick={(e) => filterItem('blog')}>
                {" "}
                <i className={`fas fa-paragraph ${style.padright}`}></i>Blog
                Posts
              </div>
              <div className={itemType == 'news' ? style.active : style.readmore} onClick={(e) => filterItem('news')} >
                {" "}
                <i className={`fas fa-quote-right ${style.padright}`}></i> In
                the News
              </div>
              <div className={itemType == 'release' ? style.active : style.readmore} onClick={(e) => filterItem('release')}>
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
                        <a href={i.link} className={style.readmore}>
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
