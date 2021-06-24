import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@react-pdf/renderer';

export const Footer = ({ transactions }) => (
  <Text>
    {!transactions.name || !transactions.description
      ? 'Example footer'
      : `We declare that ${transactions.name} Participated in the ${transactions.description}`}
  </Text>
);

Footer.propTypes = {
  transactions: PropTypes.any.isRequired,
};
