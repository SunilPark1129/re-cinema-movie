/*
Page: PopupBackground
A component that prevents scrolling and changes the background to dark.
Created by Sunil Park
*/

import React from "react";
import styled from "styled-components";

const StyledPopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(20%) blur(5px);
  cursor: pointer;
  z-index: 997;
`;

const PopupBackground = ({ setSelectedMovieID }) => {
  // Prevent scrolling.
  document.body.style.overflow = "hidden";

  // Disable scroll prevention when clicking on the background.
  const onClickHandler = () => {
    document.body.style.overflow = "auto";

    // Close the Content.jsx by set selectedMovieID as Null
    setSelectedMovieID(null);
  };
  return <StyledPopup onClick={onClickHandler} />;
};

export default PopupBackground;
