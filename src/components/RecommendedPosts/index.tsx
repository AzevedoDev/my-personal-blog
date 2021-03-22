import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

type RecommendedPosts = {
  next: {
    frontmatter: {
      title: string
    }
    fields: {
      slug: string
    }
  }
  previous: {
    frontmatter: {
      title: string
    }
    fields: {
      slug: string
    }
  }
}

const RecommendedPosts = ({ next, previous }: RecommendedPosts) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        cover
        direction="left"
        bg={getThemeColor()}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        cover
        direction="right"
        bg={getThemeColor()}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

export default RecommendedPosts
