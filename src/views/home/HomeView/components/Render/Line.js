import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg, G, Path, StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  line: {
    width: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export const Line = ({ theme }) => {
  return (
    <Svg
      style={styles.line}
      viewBox="0 0 1337 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G
        fill={theme.palette.primary.main}
        stroke={theme.palette.primary.main}
        transform="translate(-36 45.5)"
      >
        <Path
          id="line"
          d="M664.5 2.6c-2.4 2.5-1.6 7.5 1.6 9.3 2.4 1.3 2.9 1.3 5.3-.2 4.7-3.1 2.7-10.7-2.9-10.7-1.3 0-3.1.7-4 1.6zM645 4.9c-.5 1.1-.7 2.6-.4 3.4 1.2 3.3 7.4 2.4 7.4-1.1 0-4.1-5.1-5.7-7-2.3zm41.2-.7c-3.5 3.5 1 8.1 4.8 5 1.9-1.6 2.1-2.2 1.1-4-1.3-2.4-4-2.9-5.9-1zm-60.1 1.2c-1.6 1.9-.6 3.6 2 3.6 1.5 0 2-.6 1.7-2.2-.4-2.7-2.1-3.3-3.7-1.4zm81.6-.7c-1.5 1.4-.7 4.3 1.2 4.3 2.6 0 3.6-1.7 2.1-3.5-1.4-1.6-2.3-1.9-3.3-.8zM0 7c0 1.4 607.6 1.4 608.5 0 .4-.7-101.2-1-303.9-1C102.2 6 0 6.3 0 7zm728 0c0 1.4 607.6 1.4 608.5 0 .4-.7-101.2-1-303.9-1C830.2 6 728 6.3 728 7z"
        />
      </G>
    </Svg>
  );
};

Line.propTypes = {
  theme: PropTypes.object.isRequired
};
