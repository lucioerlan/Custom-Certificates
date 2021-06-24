import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  description: {
    marginBottom: '30px'
  }
});

export const Description = ({ transactions }) => (
  <Text style={styles.description}>
    {!transactions.description
      ? 'Example description'
      : transactions.description}
  </Text>
);

Description.propTypes = {
  transactions: PropTypes.any.isRequired
};
