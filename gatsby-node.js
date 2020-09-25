
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
    {
        allContentfulBlog {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulPress {
          edges {
            node {
              id
            }
          }
        }
        allContentfulHelpTopic {
          edges {
            node {
              id
              slug
            }
          }
        }
}
      
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }

// Create blog-list pages
const posts = result.data.allContentfulBlog.edges
const postsPerPage = 6
const numPages = Math.ceil(posts.length / postsPerPage)
Array.from({ length: numPages }).forEach((_, i) => {
  createPage({
    path: i === 0 ? `/blog` : `/blog/${i + 1}`,
    component: path.resolve("./src/templates/blog.js"),
    context: {
      limit: postsPerPage,
      skip: i * postsPerPage,
      numPages,
      currentPage: i + 1,
    },
  })
});

//Create press pages
const pressPosts = result.data.allContentfulPress.edges
const pressPostsPerPage = 6
const pressNumPages = Math.ceil(pressPosts.length / pressPostsPerPage)
Array.from({ length: pressNumPages }).forEach((_, i) => {
  createPage({
    path: i === 0 ? `/press` : `/press/${i + 1}`,
    component: path.resolve("./src/templates/press.js"),
    context: {
      limit: pressPostsPerPage,
      skip: i * pressPostsPerPage,
      pressNumPages,
      currentPage: i + 1,
    },
  })
});

      //Get blog posts
      // Resolve the paths to our template
      const blogPostTemplate = path.resolve("./src/templates/blogpost.js");

      // Then for each result we create a page.
      result.data.allContentfulBlog.edges.forEach(edge => {
        createPage({
          path: `/blogpost/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });


      //Get all help articles
      // Resolve the paths to our template
      const helpTopicTemplate = path.resolve("./src/templates/helparticle.js");
      // Then for each result we create a page.
      result.data.allContentfulHelpTopic.edges.forEach(edge => {
        createPage({
          path: `/help/${edge.node.slug}/`,
          component: slash(helpTopicTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });

      //Build Help Category images
     // Create blog-list pages
const articles = result.data.allContentfulHelpTopic.edges
const categories = [
  {category: 'Accounts', description: 'Accounts, Roles, Permissions'},
  {category: 'Started', description: 'Get started using Pulse'},
  {category: 'Dashboard', description: 'Help with your dashboard'},
  {category: 'Kiosks', description: 'Help with your hardware'},
  {category: 'Billing', description: 'Money & Contracts'},
  {category: 'Surveys', description: 'Everything about surveys'},
]

categories.forEach( i => {
  createPage({
    path: `/help/${i.category.toLocaleLowerCase()}`,
    component: path.resolve("./src/templates/helpcategory.js"),
    context: {
     category: i.category,
     categoryDescription: i.description
    },
  })
});








    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });




};