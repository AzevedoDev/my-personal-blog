import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`
const Button = styled(Link)`
  background: var(--background);
  border: 1px solid var(--borders);
  border-radius: 6px;
  color: var(--texts);
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.7;
  }
`

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" image="https://http.cat/404.jpg" />
      <NotFoundWrapper>
        <StaticImage src="https://http.cat/404.jpg" alt="not found page cat" />
        <Button to="/">De volta ao blog!</Button>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage
