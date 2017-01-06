import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2%;
  width: 45%;
  display: inline-block;
  vertical-align: top;  
  min-width: 350px;
  margin-left: 5%;
`;

const CircleBullet = styled.div`
  border-radius: 50%;
  text-align: center;
  font-size: 16px;
  font-weight: lighter;
  padding: 17px 14px 12px 14px;
  font-family: 'Josefin Sans', sans-serif;
  background-color: ${props => props.color};
  color: white;
  width: 23px;
  height: 25px;
  display: inline-block;
  vertical-align: top;  
  margin-right: 5%;  
  margin-top: 20px;
`;

const Box = styled.div`
  width: 70%;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
  display: inline-block;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 17px;
  color: rgba(0,0,0,0.54)   ;
`;

const Content = styled.div`
`;

const TimeLineItem = ({ title, content, color, icon }) => (
  <Container>
    <CircleBullet color={color}>
      <i className={`fa fa-${icon}`} aria-hidden="true" />
    </CircleBullet>
    <Box>
      <Title>
        { title }
      </Title>
      <Content>
        {content}
      </Content>
    </Box>
  </Container>
 );

TimeLineItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TimeLineItem;
