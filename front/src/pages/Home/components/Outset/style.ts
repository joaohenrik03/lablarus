import { styled } from "styled-components"

export const OutsetContainer = styled.section`
  height: calc(100vh - 7.8rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > div {
    margin-bottom: 2.4rem;

    h1 {
      font-family: 'Red Hat Display', sans-serif;
      font-size: 7.2rem;
      line-height: 110%;
      font-weight: 800;

      span {
        color: ${props => props.theme.blue};
      }
    }

    img {
      height: 3.2rem;
    }
  }

  p {
    max-width: 50rem;

    color: ${props => props.theme.text};
    line-height: 160%;
    font-size: 2rem;
  }

  p:last-child {
    font-size: 1.6rem;
  }
`

export const OutsetFormContainer = styled.form`
  background-color: ${props => props.theme.white};
  box-shadow: 0px 62px 120px rgba(255,255,255,0.2);

  padding: 1.6rem;
  width: max-content;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      height: 6rem;
      padding: 1.6rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      height: 6rem;
      padding: 1.6rem;
      border-bottom: 1px solid ${props => props.theme.text};
    }
  }

  button {
    padding-inline: 3.2rem;
    height: 6rem;

    font-family: 'Epilogue', sans-serif;
    color: white;
    font-size: 1.8rem;
    font-weight: bold;

    background-color: ${props => props.theme.primary};
  }
`