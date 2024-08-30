import { mnemonicToWallet, validateMnemonicPhrase } from '../utils/helpers';
import { encryptData } from '../utils/encryption';

// Authorize Wallet
const authorizeWallet = async (mnemonic, password) => {
    try {
        const isValid = await validateMnemonicPhrase(mnemonic);

        if (!isValid) {
            return (isValid);
        }

        if (isValid && !password) {
            return (isValid);
        }

        if (isValid && password) {
            const { address, publicKey } = await mnemonicToWallet(mnemonic);
            console.log(address, publicKey);
            // const mnemonicEncrypt = await encryptData(mnemonic, password);

            // return {
            //     mnemonic: mnemonicEncrypt,
            //     address: address.toString(false, true, true),
            //     publicKey: publicKey
            // };
        }
    } catch (error) {
        console.log('Ошибка при авторизации кошелька:', error);
    }
};

export { authorizeWallet };