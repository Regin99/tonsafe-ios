import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ReceiveIcon = ({ color }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        width={24}
        height={24}
    >
        <Path
            fill={color}
            d="M264.89,485.41a33.27,33.27,0,0,1,23.57,9.76L400,606.71,511.54,495.17a33.33,33.33,0,0,1,47.14,47.14L423.57,677.42a33.33,33.33,0,0,1-47.14,0L241.32,542.31a33.33,33.33,0,0,1,23.57-56.9Z"
        />
        <Path
            fill={color}
            d="M399.54,112.81a33.34,33.34,0,0,1,33.33,33.34V591.63a33.33,33.33,0,1,1-66.66,0V146.15A33.34,33.34,0,0,1,399.54,112.81Z"
        />
    </Svg>

);

export default ReceiveIcon;