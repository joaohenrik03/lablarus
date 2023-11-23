import { styled } from "styled-components";

export const FeaturedJobsContainer = styled.section`
  margin-block: 7.2rem;

  h2 {
    font-size: 4.8rem;
    font-family: 'Red Hat Display', sans-serif;

    margin-bottom: 4.8rem;

    span {
      color: ${props => props.theme.blue};
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3.2rem;
    grid-row-gap: 3.2rem;
  }
`