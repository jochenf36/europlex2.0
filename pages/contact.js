import React from 'react';
import styled from 'styled-components';
import MainLayout from '../layouts//MainLayout';
import Header from '../components/Header';
import Title from '../components/Title';

const TitleContainer = styled.div`
  margin: 20px 5% 40px 5%;
`;

const Content = styled.div`
  height: 150%;
  padding: 0% 5% 2% 5%;
  font-size: 1em;
  color: #8B8B8B;
`;


export default () => (
  <MainLayout>
    <Header title="Contact" />
    <TitleContainer>
      <Title>Where are we Located</Title>
    </TitleContainer>
    <Content>
      Besides our production facilities in Belgium we also have a production facility in Taiwan. The production is setup to process and manage big batches of parts that need to be built for global purposes, they also work according to the 3 pillars we hold dear: Quality – Flexibility – Cost.
    </Content>
    <div>
    </div>
  </MainLayout>
);
