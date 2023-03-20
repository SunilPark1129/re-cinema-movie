import styled from "styled-components";

export const StyledPage = styled.main`
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 1 60%;
  min-height: 180vh;

  > span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.light};
    border-bottom-left-radius: 1.5rem;

    &:after {
      width: 2rem;
      height: 2rem;
      top: 0;
      left: 0;
      content: "";
      background-color: ${({ theme }) => theme.colors.dark};
      position: absolute;
      z-index: -1;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    > span {
      display: none;
    }
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSectionSearch = styled(StyledFlex)`
  min-height: 40rem;
  padding: 0 1rem;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0;
  }
`;

export const StyledRecommended = styled.header`
  width: 100%;
  min-height: 18rem;
`;

export const StyledSectionHeader = styled(StyledFlex)`
  display: flex;
  gap: 1rem;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.constLight};
  flex-direction: column;
  position: relative;

  span {
    position: absolute;
    left: 0;
    top: 100%;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.light};
    border-top-left-radius: 1.5rem;

    &:after {
      width: 2rem;
      height: 2rem;
      top: 0;
      left: 0;
      content: "";
      background-color: ${({ theme }) => theme.colors.dark};
      position: absolute;
      z-index: -1;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    span {
      display: none;
    }
  }
`;

export const StyledFeature = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  p {
    font-size: 0.9em;
  }

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.constLight};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    height: 2rem;
    width: auto;
    border: 1px solid white;

    &:hover:not(.isActived) {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  .isActived {
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    gap: 0.5rem;

    h4 {
      flex: 1 1 100%;
    }
  }
`;

export const StyledPreventAutoFit = styled.div`
  height: auto;
  flex: 1 1 10%;
`;

export const StyledSearchDescription = styled.article`
  width: 100%;
  z-index: 3;
  padding: 2rem;
`;

export const StyledSearchDescriptionText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.constLight};
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1em;
  width: 100%;

  h2,
  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const StyledContinueBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledContinueBtn = styled.button`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: none;
  cursor: pointer;
  z-index: 2;
  color: ${({ theme }) => theme.colors.reversedClr};
  opacity: 0;
  pointer-events: none;
  font-weight: bolder;

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.reversedClr};
  }

  &.visible {
    opacity: 1;
    pointer-events: all;
  }
`;

export const StyledQuryValue = styled.header`
  flex: 1 1 100%;
  display: flex;
  margin: auto;
  margin: 2rem 0;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.reversedClr};
  }
`;
