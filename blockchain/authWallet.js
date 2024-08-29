// import { TonClient } from "@ton/ton";
import { mnemonicToWalletKey, mnemonicValidate } from '@ton/crypto';

// Create Client
// const client = new TonClient({
//     endpoint: 'https://toncenter.com/api/v2/jsonRPC',
// });

// Authorize Wallet
const authorizeWallet = async (mnemonic, password) => {
    try {
        const isValid = await mnemonicValidate(mnemonic);

        if (!isValid) {
            return (isValid);
        }

        if (isValid && !password) {
            return (isValid);
        }

        if (isValid && password) {
            const { publicKey } = await mnemonicToWalletKey(mnemonic);
        }
    } catch (error) {
        console.error('Ошибка при авторизации кошелька:', error);
    }
};

export { authorizeWallet };