/*
Page: ErrorPage
If the server had a 404 status, the website goes to this page and displays an error message.
Created by Sunil Park
*/

import React from "react";
import {
  StyledErrorPage,
  StyledErrorPageHeader,
  StyledErrorPageMain,
} from "../../components/styles/ErrorPage.styled";
const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <StyledErrorPageHeader>
        <h2>404</h2>
        <h3>Error</h3>
      </StyledErrorPageHeader>
      <StyledErrorPageMain>
        <h3>Page not found</h3>
        <p>Oops . . . Something is wrong</p>
        <p>The address you are looking for does not exist</p>
      </StyledErrorPageMain>
    </StyledErrorPage>
  );
};

export default ErrorPage;
