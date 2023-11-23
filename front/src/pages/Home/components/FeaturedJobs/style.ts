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
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 3.2rem;
    flex-wrap: wrap;
  }
`