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

const Press = (props) => {
  const items = props.data.allContentfulPress.nodes;
  const { currentPage, pressNumPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === pressNumPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()


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
              <div  role= "button" tabIndex='0'   className={itemType === 'all' ? style.active : style.readmore} onKeyDown={(e) => filterItem('all')} onClick={(e) => filterItem('all')}>Show All</div>
              <div  role= "button" tabIndex='0'   className={itemType === 'blog' ? style.active : style.readmore} onKeyPress={(e) => '' } onClick={(e) => filterItem('podcast')}>
                {" "}
                <i className={`fas fa-file-audio ${style.padright}`}></i> Podcasts 
              </div>
              <div  role = "button" tabIndex='0'   className={itemType === 'news' ? style.active : style.readmore} onKeyPress={(e) => '' } onClick={(e) => filterItem('news')} >
                {" "}
                <i className={`fas fa-quote-right ${style.padright}`}></i> In
                the News
              </div>
              <div  role = "button" tabIndex='0'   className={itemType === 'release' ? style.active : style.readmore} onKeyPress={(e) => '' } onClick={(e) => filterItem('release')}>
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
                        {i.title}
                      </div>
                      <div className={style.itemPreview}>{i.preview.preview}</div>
                      {i.external ? (
                        <a href={i.link} target="_blank" rel="noopener noreferrer"  className={style.readmore}>
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
                <div className={style.buttonRow}>{!isFirst && (
    <Link className={style.learnmore} to={'/press/' + prevPage} rel="prev">
      ← Previous Page
    </Link>
  )}
  {!isLast && (
    <Link className={style.learnmore}  to={'/press/' + nextPage} rel="next">
      Next Page →
    </Link>
  )}</div>
              </div>
              <div className={style.mediaKit}>
              <div className={style.mediaKitHeader}>Media Kit</div>
              <div className={style.mediaKitsub}>About</div>
              <div className={style.info}>Pulse For Good is a social good company dedicated to helping the voices of vulnerable people change the way organizations, communities and groups provide services. We utilize technology to help individuals have a safe place to share feedback about the services they receive without fear of retribution.
</div>
              <div className={style.mediaKitsub}>Logos</div>
              <img alt="Pulse Logo" className={style.logo} src={pulseLogo}/>
              <img alt="Pulse Pink Logo" className={style.logo} src={pinkLogo}/>
              <img alt="Pulse White Logo" className={style.whitelogo} src={whiteLogo}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Press


export const pressListQuery = graphql`
  query pressListQuery($skip: Int!, $limit: Int!) {
    allContentfulPress(sort: {fields: [date], order: DESC}, limit: $limit, skip: $skip) {
      nodes {
        date
        title
        
        preview{
          preview
        }
        itemType
        iconCode
        link
        external
      }
    }
  }
`