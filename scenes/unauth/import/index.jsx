import React, { useState } from 'react';
import { View } from 'react-native';
import { scheme } from '../../../assets/styles/custom';
import Mnemonic from './components/mnemonic';
import Password from '../../../components/main/password';

const Import = () => {

    const [state, setState] = useState({
        stage: 1,
        password: '',
        rePassword: '',
        passwordError: '',
        rePasswordError: '',
        mnemonicErrors: Array(24).fill(false),
        mnemonicError: false,
        mnemonic: [
            "stairs",
            "vital",
            "boat",
            "obvious",
            "speak",
            "vapor",
            "dove",
            "own",
            "attract",
            "tennis",
            "alarm",
            "planet",
            "try",
            "stomach",
            "team",
            "manage",
            "candy",
            "alley",
            "day",
            "lumber",
            "shove",
            "royal",
            "laugh",
            "prosper",
        ],
    })

    const { stage } = state;

    return (
        <View style={scheme.auth}>
            {stage === 1 ? (
                <Mnemonic
                    state={state}
                    setState={setState}
                />
            ) : (
                <Password
                    state={state}
                    setState={setState}
                />
            )}
        </View>
    );
};

export default Import;