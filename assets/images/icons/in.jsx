import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const InIcon = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        style={{ transform: [{ rotate: '45deg' }] }}
        width="100%"
        height="100%"
    >
        <Circle
            cx="128"
            cy="128"
            r="103.97"
            fill="rgba(30, 176, 60, 0.18)"
            stroke="none"
            strokeMiterlimit="15"
            strokeWidth="15"
        />
        <Path
            d="M128,77.14V178.86m0,0,45.77-45.77M128,178.86,82.23,133.09"
            fill="none"
            stroke="#2bb259"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="15"
        />
    </Svg>
);

export default InIcon;