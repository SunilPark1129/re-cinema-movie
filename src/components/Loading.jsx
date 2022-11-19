/*
Component: Loading
Show a loading animation while waiting for a fetch.
Created by Sunil Park
*/

import React from "react";
import logo from "../assets/main_logo.png";

import {
  StyledLoading,
  StyledLoadingContent,
  StyledLoadingCircle,
} from "./styles/Loading.styled";

const Loading = () => {
  return (
    <StyledLoading>
      <StyledLoadingContent>
        <img src={logo} alt="CN_logo" />
        <StyledLoadingCircle />
        <StyledLoadingCircle />
        <StyledLoadingCircle />
      </StyledLoadingContent>
    </StyledLoading>
  );
};

export default Loading;
