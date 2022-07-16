import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProjectCard = (props) => {
  const {
    details: { _id, name, img, description, tags, git, preview, dev },
  } = props;
  //console.log(props);
  return (
    <Card key={_id}>
      {/*dev === true -> in development, dev === false -> Refactor, dev === null -> complete project*/}
      {dev === null ? null : dev === true ? (
        <Dev>In Development</Dev>
      ) : (
        <Dev>Major Refactor</Dev>
      )}
      <CardName>{name}</CardName>
      <CardImg> {img}</CardImg>
      <p className="cardDesc">{description}</p>
      {/*<span className="span-tag">Tech:</span>*/}
      <p className="cardTags"> {tags}</p>
      <p className="cardPreview">
        {git !== '' ? (
          <button onClick={() => window.open(git, '_blank').focus()}>
            View Git Repository
          </button>
        ) : (
          'No live preview available :('
        )}
      </p>
      <p className="cardPreview">
        {preview !== '' ? (
          <button onClick={() => window.open(preview, '_blank').focus()}>
            View Live Preview
          </button>
        ) : (
          'No live preview available :('
        )}
      </p>
    </Card>
  );
};

export default ProjectCard;

const Dev = styled.div`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  position: relative;
  transform: rotate(37deg);
  margin-top: 1rem;
  margin-left: 73%;
  color: ${({ theme }) => theme.heading};
  background-color: #fafafa;
  border: 2px solid ${({ theme }) => theme.heading};
  width: 13rem;
  overflow: hidden;
  text-align: center;
`;

const Card = styled.div`
  overflow: hidden;
  position: relative;
  border: 3px solid ${({ theme }) => theme.text};
  padding: 10px;
  width: 18.75rem;
  word-wrap: break-word;
  border-radius: 15px;
  font-size: medium;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  background-color: ${({ theme }) => theme.mainBackground};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  align-items: center;
  @media (max-width: 768px) {
    width: 85%;
  }
  h1 {
    color: ${({ theme }) => theme.heading};
    font-size: 1.5rem;
  }
  p {
    //padding: 0.3rem 0.3rem;
    //margin-bottom: 1rem;
    //margin-right: 0.5rem;

    font-size: 1rem;
    //background: ${({ theme }) => theme.highlight};
    border-radius: 5px;
    padding: 1%;
    //font-weight: 600;
    //color: ${({ theme }) => theme.text};
  }
  .cardPreview {
    background: transparent;
    button {
      border: 0.1em solid ${({ theme }) => theme.border};
      border-radius: 15px;
      padding: 0.35em 1.2em;
      background-color: transparent;
      color: ${({ theme }) => theme.text};
      box-sizing: border-box;
      font-size: 13px;
      letter-spacing: 1.42px;
      font-weight: 600;
      transition: all 0.2s;
      &:hover {
        color: #000000;
        background-color: #ffffff;
        cursor: pointer;
      }
    }
  }

  .cardTags {
    width: auto;
  }
`;

const CardName = styled.h1`
  align-items: center;
  font-weight: 700;
  color: #ec5db5;
  background-color: transparent;

  //border: solid white 3px;
`;

const CardImg = styled.p`
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1rem;
  }
`;
