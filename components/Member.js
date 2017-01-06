import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.li`
    width: 230px;  
    height: 250px; 
    margin: auto;
    text-align:center;    
`;

const Photo = styled.img`
    border: 1px solid black;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16)
`;

const Name = styled.div`
    margin-top: 2%;
    font-weight: bold;
`;

const Role = styled.div`
    margin-top: 2%;
    font-weight: lighter;
    font-style: italic;
`;


const Member = ({ photo, role, firstname, lastname }) => (
  <Container>
    <Photo src={photo} />
    <Name>{firstname} {lastname}</Name>
    <Role>{role}</Role>
  </Container>
);

Member.propTypes = {
  photo: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default Member;
