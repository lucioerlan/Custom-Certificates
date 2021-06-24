import React from 'react';
import PropTypes from 'prop-types';
import {
  Document, Font, Page, StyleSheet, View
} from '@react-pdf/renderer';
import RalewayLight from 'src/assets/fonts/Raleway-Light.ttf';
import { DateTime } from 'src/utils/format-dates';
import {
  Border,
  Logo,
  Line,
  Title,
  Description,
  Name,
  Footer,
  Date
} from './Render';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  container: {
    width: '100%',
    marginTop: '80px',
    color: '#aba9a9',
    fontFamily: 'Raleway-Light'
  }
});

Font.register({
  family: 'Raleway-Light',
  src: RalewayLight
});

const PdfRender = ({ theme, transactions }) => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape">
      <View style={styles.container}>
        <Border
          theme={theme}
        />
        <Logo
          theme={theme}
        />
        <Line
          theme={theme}
        />
        <Title
          theme={theme}
          transactions={transactions}
        />
        <Description
          transactions={transactions}
        />
        <Name
          theme={theme}
          transactions={transactions}
        />
        <Footer
          transactions={transactions}
        />
        <Date
          theme={theme}
          DateTime={DateTime}
        />
      </View>
    </Page>
  </Document>
);

PdfRender.propTypes = {
  theme: PropTypes.object.isRequired,
  transactions: PropTypes.any.isRequired,
};

export default PdfRender;
