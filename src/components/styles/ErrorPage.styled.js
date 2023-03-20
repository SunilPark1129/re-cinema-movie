import styled from "styled-components";

export const StyledErrorPage = styled.section`
  margin: auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const StyledErrorPageHeader = styled.header`
  display: flex;
  align-items: baseline;
  color: var(--main-clr);
  h2 {
    font-size: 10rem;
  }
  h3 {
    font-size: 4rem;
    color: var(--strong-clr);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 6rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;
export const StyledErrorPageMain = styled.main`
  h3 {
    font-size: 2em;
    color: rgb(153, 153, 153);
    padding: 2rem;
  }
  text-align: center;
`;
