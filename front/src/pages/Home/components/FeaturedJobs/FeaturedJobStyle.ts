import { styled } from "styled-components";

export const FeaturedJobCardContainer = styled.li`
  background-color: ${props => props.theme.white};

  padding: 2.4rem;
  width: 100%;
  max-width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > p {
    color: ${props => props.theme.text};
    font-family: 'Epilogue', sans-serif;
    line-height: 160%;
  }
`

export const FeaturedJobCardTop = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.6rem;

  span {
    padding: 0.8rem 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${props => props.theme.primary};

    color: ${props => props.theme.primary};
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
  }
`

export const FeaturedJobCardMid = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: ${props => props.theme.bg};
    font-family: 'Epilogue', sans-serif;
    font-size: 1.8rem;

    margin-bottom: 1.2rem;
  }

  address {
    color: ${props => props.theme.text};
    font-family: 'Epilogue', sans-serif;
    font-style: normal;
  }
`