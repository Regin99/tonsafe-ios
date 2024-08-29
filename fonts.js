import { useFonts } from 'expo-font';

const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
        'GolosRegular': require('./assets/fonts/GolosText-Regular.ttf'),
        'GolosSemibold': require('./assets/fonts/GolosText-SemiBold.ttf'),
        'GolosBold': require('./assets/fonts/GolosText-Bold.ttf'),
    });

    return fontsLoaded;
};

export default useCustomFonts;