/*
Page: Main for the homepage
This page collects all the materials to fetch a movie.
Created by Sunil Park
*/

import React, { useState } from "react";
import { StyledArticle } from "../../components/styles/Page.styled";
import Content from "../../components/Content";
import PopupBackground from "../../components/PopupBackground";
import Features from "./Features";

import Lists from "../../components/Lists";

import { request, sortBy } from "../../data/data";

const Main = ({ genreID }) => {
  // Data is stored to display the content of the movie.
  const [setlectedMovieID, setSelectedMovieID] = useState(null);

  // Filter movies.
  const [sortByURL, setSortByURL] = useState("popular");

  // Set how to display the movie posters.
  const [viewBy, setViewBy] = useState(true);

  return (
    <StyledArticle>
      <Features
        sortByURL={sortByURL}
        setSortByURL={(str) => setSortByURL(str)}
        viewBy={viewBy}
        setViewBy={(bool) => setViewBy(bool)}
      />

      <Lists
        pageParent="HOME"
        parameter={request[genreID].URL}
        query={genreID + sortByURL}
        path={sortBy[sortByURL]}
        viewBy={viewBy}
        setSelectedMovieID={(id) => setSelectedMovieID(id)}
      />

      {/* 
      If the movie ID value is obtained, the movie 
      information is displayed in the content. 
      */}
      {setlectedMovieID !== null && (
        <>
          <Content
            data={setlectedMovieID}
            setSelectedMovieID={(off) => setSelectedMovieID(off)}
          />
          <PopupBackground
            setSelectedMovieID={(off) => setSelectedMovieID(off)}
          />
        </>
      )}
      <span></span>
    </StyledArticle>
  );
};

export default Main;
