// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
     <StaticImage
        alt="William, the creator of this blog, in a Cleveland Browns NFL hat, with a smile."
        src="https://i.ibb.co/s9t0QSn/Optimized-Head-Shot.jpg"
        style={{
          maxWidth: '50%',
          borderRadius: '25px',
          textAlign: 'center',
        }}
      />
    <p>Hi there! I'm the proud creator of this site, which I built while learning Gatsby.
    I greatly enjoy learning to use new technologies which is why software development suites me so well.
    I am passionate about coding.  Infact I work a full-time job cleaning and repairing pools and do all this in my free time.</p>
  </Layout>
  )
}
// Step 3: Export your component
export default AboutPage