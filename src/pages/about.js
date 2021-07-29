// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <p>Hi there! I'm the proud creator of this site, which I built while learning Gatsby.
    I greatly enjoy learning to use new technologies which is why software development suites me so well.
    I am passionate about coding.  Infact I work a full-time job cleaning and repairing pools and do all this in my free time.</p>
  </Layout>
  )
}
// Step 3: Export your component
export default AboutPage