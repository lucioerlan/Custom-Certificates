import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const Date = ({ theme, DateTime }) => {
  const styles = StyleSheet.create({
    date: {
      marginBottom: '85px',
      marginTop: '25px',
      color: theme.palette.primary.main,
      fontSize: 25
    }
  });
  return (
    <View>
      <Text>{`in day ${DateTime()}, lasting 1 hour.`}</Text>
      <Text style={styles.date}>{`${DateTime()}`}</Text>
    </View>
  );
};

Date.propTypes = {
  theme: PropTypes.object.isRequired,
  DateTime: PropTypes.func.isRequired
};
