// 222222222222222



import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background-color: ${({ scrollNav }) =>
    scrollNav ? '#16454F' : 'transparent' };
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0px;
  z-index: 10;
  border-radius: 0px 0px 20px 20px;
  transition: 0.8s all ease;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
// 左側logo
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
  color: ${({ scrollNav }) =>
    scrollNav ? '#fff' : '#16454F' };
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
// 右側漢堡
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 16px;
    right: 16px;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`
// 右側選單容器
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    text-decoration: underline;
    transition: 0.5s ease-in-out;
  }
`
export const Img = styled.img`
  width: 100%;
  background-size: cover;
`