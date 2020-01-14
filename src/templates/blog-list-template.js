import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/blog.module.css'
import BlogCard from '../components/Blog/BlogCard'
import StyledTitle from '../components/StyledTitle'

const Blog = () => {
    return <div>Blogs Template</div>
    
}
export const query = graphql `
query getPosts($skip:Int!, $limit:Int!){
    posts:allContentfulPost
    (skip:$skip,limit:$limit,sort:{fields:published,order:DESC})
    {
        edges{
            node{
                slug
                title
                id:contentful_id
                published(formatString:"MMMM Do, YYYY"),
                image{
                    fluid
                    src
                }
            }
        }
    }
}
`
export default Blog
