import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 120rem;
  height: 7.8rem;

  margin-inline: auto;
  padding-block: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

   img {
    max-height: 3.6rem;
   }
`

export const LoginContainer = styled.div`
  display: flex;

  span {
    display: block;
    background-color: white;
    width: 1px;
  }
`

const BaseButton = styled.a`
  font-family: 'Inter', sans-serif;
  padding: 1.2rem 2.4rem;
`

export const LoginButton = styled(BaseButton)`
  margin-right: 1.6rem;

  color: ${props => props.theme.primary};

` 

export const SignButton = styled(BaseButton)`
  margin-left: 1.6rem;

  background-color: ${props => props.theme.primary};
  color: white;
` 