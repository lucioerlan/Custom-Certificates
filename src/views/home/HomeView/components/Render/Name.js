import React from 'react';
import PropTypes from 'prop-types';
import { Font, StyleSheet, Text } from '@react-pdf/renderer';
import RalewayMedium from 'src/assets/fonts/Raleway-Medium.ttf';

Font.register({
  family: 'Raleway-Medium',
  src: RalewayMedium
});

export const Name = ({ theme, transactions }) => {
  const styles = StyleSheet.create({
    name: {
      textTransform: 'uppercase',
      color: theme.palette.primary.main,
      marginBottom: '30px',
      fontFamily: 'Raleway-Medium',
      fontSize: 30
    }
  });

  return (
    <Text style={styles.name}>
      {!transactions.name ? 'Example name' : transactions.name}
    </Text>
  );
};

Name.propTypes = {
  theme: PropTypes.object.isRequired,
  transactions: PropTypes.any.isRequired,
};
