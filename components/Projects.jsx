import React, { useState, useEffect } from 'react';
import Project from './ProjectCard';
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
        {totalProjects.map((details, i) => (
          <Project key={i} details={details} />
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
  justify-content: center;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  border: 3px solid black;
`;

const Title = styled.h1`
  font-size: 5em;
`;

const DownChev = styled(ChevronDoubleDown)`
  width: 60px;
  height: 60px;
`;
