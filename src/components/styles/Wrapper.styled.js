import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  margin: auto;
`;
