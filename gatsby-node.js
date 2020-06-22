
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
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};