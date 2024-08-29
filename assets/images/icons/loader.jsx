import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import colors from '../../styles/colors';

const LoaderIcon = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const rotate = () => {
            rotateAnim.setValue(0);
            Animated.loop(
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ).start();
        };
        rotate();
    }, [rotateAnim]);

    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }]
    };

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={40}
                height={40}
            >
                <Path
                    d="M220.84,128A92.84,92.84,0,1,1,128,35.16"
                    fill="none"
                    stroke={colors.bodyTextColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="25"
                />
            </Svg>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoaderIcon;
