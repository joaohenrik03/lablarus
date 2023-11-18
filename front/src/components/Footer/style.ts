import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 120rem;

  margin-inline: auto;
`

export const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 6rem;
`

export const RightContainer = styled.div`
  max-width: 50%;

  p {
    margin-top: 3.2rem;
    max-width: 50rem;

    color: ${props => props.theme.text};
    line-height: 160%;
    font-size: 2rem;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 6rem;

  h3 {
    font-size: 1.8rem;
    color: ${props => props.theme.white};
    font-weight: 600;
    font-family: 'Epilogue', sans-serif;
  }

  ul {
    margin-top: 1.8rem;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    a {
      color: ${props => props.theme.text};
      font-weight: 400;
      font-family: 'Epilogue', sans-serif;
    }
  }
`

export const BottomContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-block: 4.4rem;

  border-top: 1px solid ${props => props.theme.text};

  p {
    color: ${props => props.theme.text};
    line-height: 160%;
  }

  ul {
    list-style: none;

    display: flex;
    gap: 2.4rem;

    a {
      height: 3.2rem;
      width: 3.2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      background-color: #363a45;
    }
  }
`