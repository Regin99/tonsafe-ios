import React from 'react';
import Svg, { Circle, Polyline } from 'react-native-svg';

const HistoryIcon = ({ color = 'currentColor' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={26}
        height={26}
    >
        <Circle
            cx="63.92"
            cy="63.92"
            r="48.18"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="9"
        />
        <Polyline
            points="63.92 34.08 63.92 63.92 87.4 80.28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="9"
        />
    </Svg>
);

export default HistoryIcon;
