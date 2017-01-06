import React from 'react';
import styled from 'styled-components';
import MainLayout from '../layouts//MainLayout';
import Header from '../components/Header';
import Title from '../components/Title';
import Member from '../components/Member';

const TitleContainer = styled.div`
  margin-top: 5%;
  text-align: center;
`;

const Content = styled.div`
  margin: 5%;
`;

const Photo = styled.img`
`;

const Members = styled.ul`
  list-style: none;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: flex-start;
`;

const teamMembers = [
  {
    firstname: 'Frankie',
    lastname: 'Vannerom',
    role: 'Chief Operating Officer',
    photo: '/static/frankie.png',
  },
  {
    firstname: 'Frankie2',
    lastname: 'Vannerom',
    role: 'Chief Operating Officer',
    photo: '/static/frankie.png',
  },
  {
    firstname: 'Frankie3',
    lastname: 'Vannerom',
    role: 'Chief Operating Officer',
    photo: '/static/frankie.png',
  },
  {
    firstname: 'Frankie4',
    lastname: 'Vannerom',
    role: 'Chief Operating Officer',
    photo: '/static/frankie.png',
  },
];

export default () => (
  <MainLayout>
    <Header title="Team" />
    <TitleContainer>
      <Title>Who Are We</Title>
    </TitleContainer>
    <Content>
      <Members>
        {
          teamMembers.map(member => (<Member key={`${member.firstname}-${member.lastname}`} {...member} />))
        }
      </Members>
    </Content>
  </MainLayout>
);
