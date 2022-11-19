/*
Component: Footer
Created by Sunil Park
*/

import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.constLight};

  p {
    margin: auto;
    max-width: 90rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h3>Cinema Movie</h3>
      <p>
        Cinema Movie (CM) is a site that provides users with a convenient way to
        view movie reviews. We extracted movie information with API and
        established it to make it easy for users to find the movie information.
        We run CM for the purpose of providing movie reviews, so we provide
        users with ratings, release dates, and overviews of movies.
      </p>
      <p>© COPYRIGHT CINEMA MOVIE SEWELL NJ - 2022</p>
    </StyledFooter>
  );
};

export default Footer;
