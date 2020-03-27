import React from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { media } from '../utils/style'


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

const SuccessPage = ({ data }) =>(
  <Layout>
    <h2>Thank You for your payment</h2>
    <br></br>
    <p><strong>Your will receive an email as your receipt keep this as your payment history.</strong></p>
    </Layout>
)

export default SuccessPage
