import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styled"

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch
      searchClient={client}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    >
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
