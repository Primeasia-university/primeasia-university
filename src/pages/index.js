import React from "react"


import Layout from "../layout/layout"
import Hero from "../components/Home/Hero"
import Event from "../components/Home/Event"
import Mesg_fr_our_head from "../components/Home/mesg_fr_our_head"
import Why_cse from "../components/Home/Why_cse"

const IndexPage = () => (
  <Layout>
    <Hero />
   <Mesg_fr_our_head/>
  <Why_cse/>
    <Event />


  </Layout>
)

export default IndexPage

// font-family: 'Bree Serif', serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Roboto Slab', serif;
