import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/contentContainer"
import style from "./blogpost.module.scss"

const BlogPost = ({ data }) => {
  const { title, body, description, heroImage, author } = data.contentfulBlog;
 
  return (
    <Layout>
       <SEO title={title} description={description.description} img={heroImage.file.url}  />
<Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
          <div className={style.blogPost}>
        <h1 className={style.header}>{title}</h1>
        <h2 className={style.description}>{description.description}</h2>
        <div className={style.authorHolder}>
        <img alt={author.name} className={style.authorImage} src={author.image.file.url} />
        <div className={style.authorName}> {author.name}</div>
        <div className={style.authorTitle}> {author.title}</div>
       
        </div>
        
        <img alt={title} className={style.heroImage} src={heroImage.file.url} />
       
        <div className={style.bodyText} dangerouslySetInnerHTML={{
    __html: body.childMarkdownRemark.html,
  }}></div>
  <div className={style.buttonholder}>
  <Link className={style.learnmore} to="/blog/">View more posts</Link>
        <Link className={style.learnmore} to="/">Back to Home</Link>
  </div>
        
      </div>
          </div>
          <div className={style.sideBar}>
            {
              data.allContentfulBlog.edges.map(b => {
                return ( b.node.title == title ? "" : <Link key={b.node.id} className={style.blogblock}  to={'/blogpost/' + b.node.slug }><div  className={style.blogPreview}>
                  <img className={style.previewImg} src={b.node.heroImage.file.url}/>
                  <div className={style.previewInfo}>
                  <div className={style.previewTitle}>{b.node.title}</div>
                  <div className={style.previewDescription}>{b.node.description.description}</div>
                  <div className={style.previewAuthorBlock}>
                  { b.node.author == null ? " " : <img className={style.previewAuthorImage} src={b.node.author.image.file.url} /> } 
                  <div className={style.previewAuthorName}> {b.node.author?.name}</div>
                  </div>
                  
                 <div className={style.previewlearnmore}> View Post</div>
                  </div>
                </div></Link>)
                
              })
            }
          </div>
        </div>
      </Container>
      
     
      
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      author {
        image{
          file{
            url
          }
        }
        name
        title
      }
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      description{
        description
      }
      heroImage {
        file {
          url
        }
      }
      
    }
    allContentfulBlog(limit: 4) {
      edges {
        node {
          description {
            description
          }
          heroImage {
            file {
              url
            }
            title
          }
          author {
            name
            image {
              file {
                url
              }
            }
            title
            id
          }
          title
          slug
        }
      }
    }
  }
`;