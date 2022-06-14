import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import { ChevronDoubleDown } from '@styled-icons/heroicons-solid/ChevronDoubleDown';

import { totalProjects } from '../const/projectArray';

const Projects = () => {
  return (
    <Container id="projectSection">
      <Title>
        <DownChev />
        Projects
        <DownChev />
      </Title>
      <ProjectRender>
        {totalProjects.map((details) => (
          <ProjectCard key={totalProjects._id} details={details} />
        ))}
      </ProjectRender>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectRender = styled.div`
  margin: auto;
  text-align: center;
  width: 60%;
  display: flex;
  row-gap: 1rem;
  column-gap: 1%;
  justify-content: center;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  //border: 3px solid black;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  letter-spacing: 1.42px;
`;

const DownChev = styled(ChevronDoubleDown)`
  width: 60px;
  height: 60px;
`;
