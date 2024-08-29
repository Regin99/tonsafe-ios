import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const AddIcon = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="100%"
        height="100%"
    >
        <Circle
            cx="128"
            cy="128"
            r="103.97"
            fill="rgba(12, 159, 232, 0.2)"
            stroke="none"
            strokeMiterlimit="15"
            strokeWidth="15"
        />
        <Path
            d="M128,77.14V178.86"
            fill="none"
            stroke="#0c9ee8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="15"
        />
        <Path
            d="M178.86,128H77.14"
            fill="none"
            stroke="#0c9ee8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="15"
        />
    </Svg>
);

export default AddIcon;
