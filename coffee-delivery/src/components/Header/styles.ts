import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
position: fixed;
background-color: ${props => props.theme.gray['gray-100']};
display: flex;
align-items: center;
justify-content: space-between;
height: 6.5rem;
max-width: 90rem;
margin: auto;
left: 0;
right: 0;


nav {
  display: flex;
  gap: 0.8rem;
  margin-right: 10rem;
}

img {
  margin-left:10rem;
}
`
export const LocationInfoContainer = styled.div`
display: flex;
align-items: center;
background-color: ${props => props.theme.purple['purple-100']};
color: ${props => props.theme.purple['purple-700']};
border-radius: 8px;
font-family: ${props => props.theme['font-family'].roboto};
font-size: 0.875rem;
font-weight: 500;
padding: 10px;
text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
pointer-events: none;
`

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.yellow['yellow-100']};
  border-radius: 6px;
  padding: 0 8px;
`
