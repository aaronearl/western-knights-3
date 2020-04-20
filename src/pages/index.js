import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import HeroText from '../components/HeroText'
import Social from '../components/Social'
import { media } from '../utils/style'
import Experience from '../components/Experience';
import Checkout from "../components/checkout"
import Technologies from '../components/Technologies';



const StyledHero = styled(Hero)`
  margin-top: -62px;
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props =>
    props.dark &&
    css`
      background: #292929;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
    `}
`

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`

const SectionTitle2 = styled.h2`
  font-size: 2em;
  color:#FF0000
  margin: 0.67em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`


const IndexPage = ({ data }) => (
  <Layout>
    <StyledHero fluid={data.hero.edges[0].node.fluid} data={data.hero.edges}>
      <HeroText />
      <Social edges={data.allSocialJson.edges} />
    </StyledHero>
    <Section id="mission" >
          <Technologies edges={data.allLogos.edges} />
      <h1>Mission</h1>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <h2><strong>Worshipful Master</strong></h2>
          <h2><strong>Robert E. Mines</strong></h2>
          <br/>
          <p>
           Western Knights, our objective, is to engage and inspire good men, who believe in a Supreme Being, to live according to the Masonic tenets of Friendship, Morality, and Brotherly Love.  The Lodge is committed to spreading the cement of brotherhood and community appreciation; thus, making the world a benevolent place.
          </p>
          <p>Working under the auspices of the Most Worshipful Prince Hall Grand  Lodge of California where Samuel T King is the 56th Grand Master.</p>

          <h2>Frequently asked questions?  Use the links below. </h2>
          <br/>
            <h3><li><a href="https://en.wikipedia.org/wiki/Prince_Hall"><span>Who was PRINCE HALL?</span></a></li></h3>
          <h3><li><a href="https://mwphglcal.org/phmsf.html">Scholarship Information</a></li></h3>


        </Box>
      </Flex>
    </Section>
    <Section id="trestle" dark>
      <SectionTitle>Trestle-Board</SectionTitle>
      <SectionTitle2>THE LODGE IS DARK DUE TO COVID-19 UNITIL FUTHER NOTICE</SectionTitle2>
      <Experience edges={data.allExperienceJson.edges} />
    </Section>
    <Section id="members">
      <SectionTitle>Members Section</SectionTitle>
      <Checkout />
      {/* <Technologies edges={data.allLogos.edges} /> */}
    </Section>
    {/* <Section id="certifications" dark>
      <SectionTitle>My Certifications</SectionTitle>
      <Certifications edges={data.allCertificationsJson.edges} />
    </Section> */}
    <Section id="scholarship" dark>
      <SectionTitle>Scholarship</SectionTitle>
      <h2>Prince Hall</h2>
      <h2>Memorial Education Scholarship Fund</h2>
      <h3>501 (3) (C) Non-profit Charitable Corporation</h3>
      <p>The Prince Hall Memorial Education and Scholarship Fund (PHMESF) grew out of a desire by Prince Hall Masons to provide educational assistance to deserving students in California. Prince Hall was the founder of Black Masonry in America in May of 1787 by a Charter from the Grand Lodge Of England. The African Grand Lodge Of North America was formed in Boston in 1791. All Prince Hall Masons across the country derive from those beginnings. The Most Worshipful Prince Hall Grand Lodge of California has donated to many educational funds through the years and continues to doso. We decided to honor the founder of our order by chartering a Non-Profit Charity to dispense the funds. The PHMESF was established 1991 and granted probationary tax-exempt status by the Internal Revenue Service and the CFTB. The fund received permanent status as a 501 (c ) 3 in 1996.</p>
      <h3>Our Mission</h3>
      <p>Summed up in a simple statement "Building bridges to a better tomorrow:" The PHMESF is a 501 (c) 3 tax-deductible nonprofit organization that collects and distributes grants and scholarships to deserving low-income Minority students, children of members of the Prince Hall family, and other High School seniors, who have demonstrated a desire to achieve in spite of their economic circumstances.</p>
      <h1><a href="https://mwphglcal.org/phmsf.html">Apply for the Scholarship </a></h1>
      <h1><a href="https://mwphglcal.org/donatetophmsf.html">Donate to the Fund</a></h1>
      {/* <Educations edges={data.allEducationJson.edges} /> */}
    </Section>
    <Section id="contactus" >
      <SectionTitle>Contact Us</SectionTitle>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <p>Are you interested in becoming a Mason?  If so, please contact us below.</p>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
         query indexQuery {
           allSocialJson {
             edges {
               node {
                 url
                 type
               }
             }
           }
           allExperienceJson {
             edges {
               node {
                 id
                 company
                 title
                 start
                 end
               }
             }
           }
           allCertificationsJson {
             edges {
               node {
                 name
                 id
                 start
                 end
                 authority
               }
             }
           }
           allLogos: allImageSharp(
             filter: { original: { src: { regex: "/logo/" } } }
             sort: { fields: original___src }
           ) {
             edges {
               node {
                 id
                  fixed(height: 475, grayscale: false) {
                   ...GatsbyImageSharpFixed_withWebp_tracedSVG
                 }
               }
             }
           }
           hero: allImageSharp(
             filter: { original: { src: { regex: "/heros/" } } }
           ) {
             edges {
               node {
                 id
                 fluid(quality: 100) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             }
           }
           pimlr: allImageSharp(
             filter: { original: { src: { regex: "/pimlr/" } } }
           ) {
             edges {
               node {
                 id
                 fluid(quality: 100) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             }
           }
           allEducationJson {
             edges {
               node {
                 id
                 school
                 program
                 start
                 end
               }
             }
           }
         }
       `
