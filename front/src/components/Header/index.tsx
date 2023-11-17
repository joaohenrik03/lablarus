import { HeaderContainer, LoginButton, LoginContainer, LogoContainer, SignButton } from './style'
import logoSvg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
        <LogoContainer>
          <img src={logoSvg} alt="" />
        </LogoContainer>

        <LoginContainer>
          <LoginButton>
            Login
          </LoginButton>
          <span></span>
          <SignButton>
            Sign Up
          </SignButton>
        </LoginContainer>
    </HeaderContainer>
  )
}