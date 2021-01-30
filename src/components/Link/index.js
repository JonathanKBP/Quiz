import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {... props}>
        {children}
      </a>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
