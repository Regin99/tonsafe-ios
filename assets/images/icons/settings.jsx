import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const SettingIcon = ({ color = 'currentColor', size = 26 }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={size}
        height={size}
    >
        <Path
            d="M46.25,108.74h35.5a14.41,14.41,0,0,0,12.49-7.22L112,70.78a14.42,14.42,0,0,0,0-14.43L94.24,25.61A14.42,14.42,0,0,0,81.75,18.4H46.25a14.42,14.42,0,0,0-12.49,7.21L16,56.35a14.42,14.42,0,0,0,0,14.43l17.75,30.74A14.41,14.41,0,0,0,46.25,108.74Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="9"
        />
        <Circle
            cx="64"
            cy="64"
            r="15.58"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="9"
        />
    </Svg>
);

export default SettingIcon;
