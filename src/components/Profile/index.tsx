import React from "react"

import getThemeColor from "../../utils/getThemeColor"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = ({ title, position, description, isMobileHeader }) => {
  return (
    <S.ProfileWrapper isMobileHeader={isMobileHeader}>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
