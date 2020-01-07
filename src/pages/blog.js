import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
export const blog = () => {
    return (
        <Layout>
            hello from blog page<Link to="/">back home yo</Link>
        </Layout>
    )
}

export default blog