import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import blogStyles from './blog.module.scss'

const BlogPage = ({data}) => {
  
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(({node}) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${node.slug}`}>
                                <h2>{node.title}</h2>
                                <p>{node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields:publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
`