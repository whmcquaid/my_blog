// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>Hello and welcome to my first blog site.</p>
    <StaticImage
        alt="William, the creator of this blog, in a Cleveland Browns NFL hat, with a smile."
        src="../images/Optimized-HeadShot.JPG"
        style={{
          maxWidth: '50%',
          borderRadius: '25px',
          textAlign: 'center',
        }}
      />
  </Layout>
  )
}
// Step 3: Export your component
export default IndexPage