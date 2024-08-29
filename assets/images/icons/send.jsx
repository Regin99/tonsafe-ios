import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SendIcon = ({ color }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        width={24}
        height={24}
    >
        <Path
            fill={color}
            d="M535.11,314.59a33.22,33.22,0,0,1-23.57-9.76L400,193.29,288.46,304.83a33.33,33.33,0,0,1-47.14-47.14L376.43,122.58a33.33,33.33,0,0,1,47.14,0L558.68,257.69a33.33,33.33,0,0,1-23.57,56.9Z"
        />
        <Path
            fill={color}
            d="M400.46,687.19a33.34,33.34,0,0,1-33.33-33.34V208.37a33.33,33.33,0,0,1,66.66,0V653.85A33.34,33.34,0,0,1,400.46,687.19Z"
        />
    </Svg>

);

export default SendIcon;