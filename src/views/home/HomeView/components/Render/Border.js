import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg, G, Path, StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  pageBackground: {
    position: 'absolute',
    top: '-10%',
    left: '10px',
    right: '10px',
    bottom: '12px',
  }
});

export const Border = ({ theme }) => {
  return (
    <Svg
      style={styles.pageBackground}
      viewBox="0 0 2996 2279"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G fill={theme.palette.primary.main} transform="translate(-36 45.5)">
        <Path
          id="border"
          d="M0 1139.5V2279h2996V0H0v1139.5zm2811.5-995.6c8.2 3.3 17.3 12.4 20.6 20.6l2.4 6v1942l-3.1 6.5c-5 10.4-12.9 17.3-23.4 20.4-4.9 1.5-122 1.6-1309.1 1.6-1279.1 0-1303.8 0-1309.8-1.9-12.5-3.9-22.2-14.5-25.1-27.5-.7-3.1-1-317.2-1-970.9 0-880.9.1-966.8 1.6-971.7 2.1-7.5 5.4-12.8 10.7-17.7 5.3-4.9 8.8-6.8 15.9-8.8 4.6-1.2 185.7-1.3 1309.8-1.2l1304.5.2 6 2.4z"
        />
      </G>

      <Path
        id="border"
        d="M209 161.4c-11.7 2.5-21.2 10.1-26.7 21.5l-2.8 5.6v1905l2.6 5.6c5 10.6 14.3 18.5 25.4 21.4 5.3 1.3 133.6 1.5 1291.5 1.5s1286.2-.2 1291.5-1.5c11.1-2.9 20.4-10.8 25.4-21.4l2.6-5.6v-1905l-2.9-6c-5.5-11.2-16-19.2-28.1-21.4-8.9-1.7-2570.9-1.4-2578.5.3zm2587 3.7c8.5 4.1 13.5 9 17.7 17.7l3.8 7.6.3 948c.2 850.2 0 948.7-1.3 954-2.8 10.7-9.4 18.9-19.8 24.4l-5.2 2.7h-2585l-6.3-3.4c-7.8-4.2-14.4-11.4-17.4-18.9l-2.3-5.7v-950c0-903 .1-950.2 1.8-955 3.5-10.2 13.5-19.8 23.6-22.9 4-1.3 179.1-1.4 1294.6-1.3l1290 .2 5.5 2.6z"
        fill="none"
        stroke={theme.palette.primary.main}
      />
    </Svg>
  );
};

Border.propTypes = {
  theme: PropTypes.object.isRequired
};
