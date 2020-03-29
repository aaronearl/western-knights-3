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
    </Section>
    <Section id="education">
      <SectionTitle>My Education</SectionTitle>
      <Educations edges={data.allEducationJson.edges} />
    </Section> */}
    <Section id="contactus" dark>
      <SectionTitle>Contact Us</SectionTitle>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
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
