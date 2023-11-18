import { styled } from "styled-components";

export const RecognitionContainer = styled.section`
  background-color: ${props => props.theme.bg};
  padding-block: 4.8rem;

  h3 {
    font-size: 1.8rem;
    color: ${props => props.theme.text};
    font-weight: 400;

    margin-bottom: 3.2rem;
  }

  ul {
    list-style: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3.2rem;
  }
`