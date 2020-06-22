import React from "react"
import style from "./blog.module.scss"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import heroes from "../images/heroes-small.jpg"

import SEO from "../components/seo"
import Container from "../components/contentContainer"

import kioskuser from "../images/kiosk-user.jpg"
import rhbuild from "../images/roadhomelbuilding.jpg"

import cleankiosk from "../images/cleankiosk.jpg"


const Example = ({ data }) => {
  const posts = data.allContentfulBlog.nodes;
  console.log(posts)

  return (
    <Layout>
      <SEO title="Tackling COVID-19 with Pulse" description="Pulse For Good helps organizations improve their COVID-19 response." />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <div className={style.header}>Writing For Good</div>
            <div className={style.subheader}>
              Stories, thoughts, and tidbits from the fight to help change the worlds most important organizations for the better 
            </div>
            <div className={style.mainEvent}>
       
{
  posts.map(p => {
return ( <div className={style.row}>
  <div className={style.rowImage}>
    <img alt="Kiosk user" src={p.heroImage.file.url} />
  </div>
  <div className={style.rowDetails}>
    <div className={style.rowHeader}>
    <Link className={style.rowHeader} to={'/blogpost/' + p.slug} > {p.title} </Link>
    </div>
    <div className={style.blogDescription}> {p.description.description} </div>
    <div className={style.previewAuthorBlock}>
                  <img className={style.previewAuthorImage} src={p.author.image.file.url} />
                  <div className={style.previewAuthorName}> {p.author.name} - {new Date(p.publishDate).toLocaleDateString()}</div>
                  </div>
    <p className={style.excerpt}>
      {p.body.childMarkdownRemark.excerpt}
                </p>
    <Link to={'/blogpost/' + p.slug} className={style.learnmore}>Read more</Link>
  </div>
</div>)
  })
}

             

              
             
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Example


export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlog(sort: {fields: [publishDate], order: DESC}, limit: $limit, skip: $skip) {
      nodes {
        publishDate
        description {
          description
        }
        title
        heroImage {
          file {
            url
          }
        }
        author {
          name
          title
          image {
            file {
              url
            }
          }
        }
        slug
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 400)
          }
        }
      }
    }
  }
`