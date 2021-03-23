import React from "react"
import * as S from "./styled"
import { Refresh } from "@styled-icons/ionicons-outline/Refresh"

const SWUpdater = () => {
  return (
    <S.NotificationWrapper>
      <p>Tem uma atualização disponivel</p>
      <S.IconWrapper onClick={() => window.location.reload()}>
        <Refresh />
      </S.IconWrapper>
    </S.NotificationWrapper>
  )
}

export default SWUpdater
