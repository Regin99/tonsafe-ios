// import { mnemonicToWalletKey, mnemonicValidate } from '@ton/crypto';
// import { keyPairFromSeed, beginCell, TonAddress } from '@ton/core';

// export const validateMnemonicPhrase = async (mnemonicArray) => {
//     try {
//         const isValid = await mnemonicValidate(mnemonicArray);
//         return isValid;
//     } catch (error) {
//         console.error('Ошибка при валидации мнемонической фразы:', error);
//         return false;
//     }
// };

// export const mnemonicToWallet = async (mnemonicArray) => {
//     try {
//         const walletKey = await mnemonicToWalletKey(mnemonicArray);
        
//         // const cell = beginCell()
//         //     .storeUint(0, 32) // Версия кошелька или иной идентификатор (0 для простых аккаунтов)
//         //     .storeBytes(publicKey)
//         //     .endCell();

//         // // Создаём адрес из инициализационной ячейки
//         // const address = new TonAddress(0, cell.hash());

//         // return address.toString('base64', { bounceable: true }); 

//         // const WalletClass = tonweb.wallet.all.v4R2;
//         // const wallet = new WalletClass(tonweb.provider, {
//         //     publicKey: walletKey.publicKey
//         // });

//         // return {
//         //     wallet,
//         //     publicKey: walletKey.publicKey.toString('hex')
//         // };
//     } catch (error) {
//         console.error('Ошибка в mnemonicToWallet:', error);
//     }
// };