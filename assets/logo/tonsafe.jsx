import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const TonsafeLogo = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 926.53 926.53"
            width={80}
            height={80}
        >
            <Rect
                rx={330.93}
                width={926.53}
                height={926.53}
                fill="#3c7dbc"
            />
            <Path
                d="M463.26,185,190.14,348.89l3.59,22.82a537.6,537.6,0,0,0,199,339.15l14.37,11.29a91,91,0,0,0,112.37,0l14.37-11.29a537.6,537.6,0,0,0,199-339.15l3.59-22.82ZM320.2,525.46a467.07,467.07,0,0,1-54.68-141.9L429,285.41V652.15A467.12,467.12,0,0,1,320.2,525.46Zm286.13,0A467.12,467.12,0,0,1,497.49,652.15V285.41L661,383.56A467.07,467.07,0,0,1,606.33,525.46Z"
                fill="#fff"
            />
        </Svg>
    );
};

export default TonsafeLogo;
