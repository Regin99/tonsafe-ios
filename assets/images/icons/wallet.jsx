import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const WalletIcon = ({ color = 'currentColor' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={26}
        height={26}
    >
        <Rect
            x="15.74"
            y="15.74"
            width="96.52"
            height="96.52"
            rx="30"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="9"
        />
        <Path
            d="M15.74,48.61h23a8.31,8.31,0,0,1,8.3,8.3h0a9.7,9.7,0,0,0,9.7,9.7H71.3a9.7,9.7,0,0,0,9.7-9.7h0a8.31,8.31,0,0,1,8.3-8.3h23"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="9"
        />
    </Svg>
);

export default WalletIcon;