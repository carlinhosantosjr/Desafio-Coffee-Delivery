import logo from '../../assets/logo.svg'
import { HeaderContainer, LocationInfoContainer, NavLinkStyled } from './styles'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationInfoContainer>
          <MapPin size={20} weight="fill" color={theme.purple['purple-500']} />
          <span>Porto Alegre, RS</span>
        </LocationInfoContainer>
        <NavLinkStyled to="/checkout" title="Home">
          <ShoppingCart
            size={20} weight="fill"
            color={theme.yellow['yellow-700']}
          />
        </NavLinkStyled>
      </nav>
    </HeaderContainer>
  )
}
