/*
Page: Main for the Search
This page collects all the materials to fetch a movie.
Created by Sunil Park
*/

import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { StyledArticle } from "../../components/styles/Page.styled";
import { StyledSearchDescription } from "../../components/styles/Page.styled";
import Tip from "../../components/Tip";
import Features from "./Features";
import Lists from "../../components/Lists";
import Content from "../../components/Content";
import PopupBackground from "../../components/PopupBackground";

const Main = () => {
  const { id } = useParams();

  const [setlectedMovieID, setSelectedMovieID] = useState(null);

  const [viewBy, setViewBy] = useState(true);

  return (
    <StyledArticle>
      <Features viewBy={viewBy} setViewBy={(bool) => setViewBy(bool)} />
      {id !== undefined ? (
        <Lists
          pageParent="SEARCH"
          parameter={`query=${encodeURIComponent(id)}`}
          query={id}
          path="/search/movie?"
          viewBy={viewBy}
          setSelectedMovieID={(id) => setSelectedMovieID(id)}
        />
      ) : (
        <StyledSearchDescription>
          <Tip />
        </StyledSearchDescription>
      )}
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
