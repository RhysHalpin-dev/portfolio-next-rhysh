import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProjectCard = (props) => {
  const {
    details: { _id, name, img, description, tags, git, preview },
  } = props;
  //console.log(props);
  return (
    <Card key={_id}>
      {/*<p className='cardName'>id: {props.details._id}</p>*/}
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

const Card = styled.div`
  border: 3px solid ${({ theme }) => theme.text};
  padding: 10px;
  width: 325px;
  word-wrap: break-word;
  //margin: 10px;

  border-radius: 15px;
  font-size: medium;

  display: flex;
  flex-direction: column;
  font-weight: 500;
  background-color: ${({ theme }) => theme.mainBackground};
  align-items: center;
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
      border: 0.1em solid white;
      border-radius: 15px;
      padding: 0.35em 1.2em;
      background-color: transparent;
      color: white;
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

const CardName = styled.p`
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
