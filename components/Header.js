import React, { PropTypes }  from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import MenuList from './MenuList';

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.14);
`;

const Logo = styled.img`
  float: left;
  vertical-align:top;
  height: 60px;
  width: 190px;
  padding: 20px 0px 0px 2%;
`;


const Header = ({ title }) => (
  <Container>
    <Link href="/"><Logo src="/static/logo.png" /></Link>
    <MenuList title={title} />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
