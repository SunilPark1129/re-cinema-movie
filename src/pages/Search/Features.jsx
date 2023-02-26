/*
Page: Features for the search page
This page sets filters before fetching.
Created by Sunil Park
*/

import React from "react";
import {
  StyledSectionHeader,
  StyledFeature,
} from "../../components/styles/Page.styled";

const Features = ({ viewBy, setViewBy }) => {
  return (
    <StyledSectionHeader>
      <StyledFeature>
        <h4>View By</h4>
        <div
          onClick={() => setViewBy(true)}
          className={viewBy ? "isActived" : ""}
        >
          <p>Images</p>
        </div>
        <div
          onClick={() => setViewBy(false)}
          className={!viewBy ? "isActived" : ""}
        >
          <p>Lists</p>
        </div>
      </StyledFeature>
      <span />
    </StyledSectionHeader>
  );
};

export default Features;
