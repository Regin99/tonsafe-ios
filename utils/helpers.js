// import { mnemonicToPrivateKey, mnemonicValidate } from '@ton/crypto';
// import { WalletContractV4 } from '@ton/ton';

// /**
//  * Проверка валидности мнемонической фразы.
//  * @param {string[]} mnemonicArray - Мнемоническая фраза.
//  * @returns {Promise<boolean>} - Возвращает `true`, если фраза валидна, иначе `false`.
//  */
// export const validateMnemonicPhrase = async (mnemonicArray) => {
//     try {
//         return await mnemonicValidate(mnemonicArray);
//     } catch (error) {
//         console.error('Ошибка при валидации мнемонической фразы:', error);
//         return false;
//     }
// };

// /**
//  * Создание кошелька из мнемонической фразы.
//  * @param {string[]} mnemonicArray - Мнемоническая фраза.
//  * @returns {Promise<Object>} - Возвращает объект с адресом и публичным ключом.
//  */
// export const mnemonicToWallet = async (mnemonicArray) => {
//     try {
//         const walletKey = await mnemonicToPrivateKey(mnemonicArray);
        
//         const publicKey = walletKey.publicKey;
//         const workchain = 0; // Mainnet
//         const walletContractV4 = WalletContractV4.create({ workchain, publicKey });

//         const address = walletContractV4.address.toRawString();

//         return { address, publicKey: publicKey.toString('hex') };
//     } catch (error) {
//         console.error('Ошибка при создании кошелька:', error);
//     }
// };