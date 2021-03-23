import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import { MainContent } from "../styles/base"

const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Pedro Azevedo, nasci em São Gonçalo/RJ e atualmente moro na
        capital fluminense, gamer nas horas vagas e amante de boa cerveja, faço
        da minha vida um eterno aprendizado, sempre em busca de coisas novas
        para aprender, no momento estou 100% focado na minha carreira front-end.
      </p>

      <p>
        Já passei por empresas como{" "}
        <a
          href="https://www.bemobi.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bemobi
        </a>
        ,{" "}
        <a
          href="https://medium.com/concretebr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Concrete Solutions
        </a>
        , Atualmente estou na{" "}
        <a
          href="https://www.midway.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Midway
        </a>
        . Tenho muita facilidade de aprender e estou aprimorando a capacidade de
        compartilhar, como todo bom autodidata, organizo meus estudo de acordo
        com o fluxo da minha carreira, atualmente estou focado em virar{" "}
        <strong>Front-end Specialist!</strong> Para que isso possa acontecer,
        estou focando meus estudos em:
        <ul>
          <li>Testes unitários</li>
          <li>Aprender mais como Javascript funciona</li>
          <li>Arquitetura de dados no front</li>
          <li>React e React-native</li>
          <li>Inglês</li>
        </ul>
        Já tentei fazer algumas faculdades e sempre acabo parando na metade,
        acho que atrapalha os estudos e em alguns momentos a falta da mesma me
        prejudicou e para compensar tenho corrido atrás e sempre aprendo algo
        novo todos os dias.
      </p>

      <p>
        Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
        gosto de jogar, passar um tempo com a minha esposa e amigos, esse blog
        nasceu na intenção de compartilhar um pouco do conhecimento que eu tenho
        e assim aprimorar mais minhas skills.
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks />
    </MainContent>
  </Layout>
)

export default AboutPage
