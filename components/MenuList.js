import React, { PropTypes } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Container = styled.div`
    text-align: right;
`;

const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Team',
    url: '/team',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

const MenuList = props => (
  <Container>
    {menuItems.map(({ title, url }, index) => (
      <MenuItem
        key={`${index}-${title}`}
        title={title}
        url={url}
        active={props.title === title}
      />
   ))}
  </Container>
);

MenuList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuList;
