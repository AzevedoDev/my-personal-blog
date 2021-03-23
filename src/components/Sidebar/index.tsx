import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = ({
  site: { title, position, authorDescription },
  setIsMenuOpen,
  isMenuOpen,
}) => (
  <S.SidebarWrapper isMenuOpen={isMenuOpen}>
    <Profile
      title={title}
      position={position}
      authorDescription={authorDescription}
      isMobileHeader={false}
    />
    <SocialLinks />
    <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
  </S.SidebarWrapper>
)

export default Sidebar
