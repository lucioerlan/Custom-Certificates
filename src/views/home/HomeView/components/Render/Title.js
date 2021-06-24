import React from 'react';
import PropTypes from 'prop-types';
import { Font, StyleSheet, Text } from '@react-pdf/renderer';
import Allura from 'src/assets/fonts/Allura-Regular.ttf';

Font.register({
  family: 'Allura',
  src: Allura
});

export const Title = ({ theme, transactions }) => {
  const styles = StyleSheet.create({
    title: {
      color: theme.palette.primary.main,
      marginTop: '30px',
      marginBottom: '30px',
      fontFamily: 'Allura',
      fontSize: 50
    }
  });

  return (
    <Text style={styles.title}>
      {!transactions.title ? 'Example course' : transactions.title}
    </Text>
  );
};

Title.propTypes = {
  theme: PropTypes.object.isRequired,
  transactions: PropTypes.any.isRequired,
};
