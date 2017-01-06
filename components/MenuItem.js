import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MenuItem = ({ title, active, url }) => {
  const Title = styled.div`
      ext-decoration: none;
      color: ${active ? 'orange' : 'rgba(0,0,0,0.54)'};
      font-size: 1.5em;
      display: inline-block;
      margin: 0px 20px;
      padding: 50px 20px 25px 20px;
      font-family: 'Josefin Sans', sans-serif;
  `;

  return (
    <Link href={url}>
      <Title>{title}</Title>
    </Link>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuItem;
