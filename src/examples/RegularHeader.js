import React from 'react'
import {StaticQuery,graphql} from 'gatsby'

const getSiteData = graphql`
query FirstQuery{
    site{
        siteMetadata{
            title
            description
            author
           
            }
        }
    }

`
const RegularHeader = () => {
    return (
        <StaticQuery 
        query={getSiteData} 
        render = {data => { 
            console.log(data)
    return <div>
        <h1>title:{data.site.siteMetadata.title}</h1>
        <h2>author:{data.site.siteMetadata.author}</h2>
        </div>
}} 
/>
    )
}

export default RegularHeader
