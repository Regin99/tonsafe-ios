import CryptoJS from 'crypto-js';

export const encryptData = (data, password) => {
    try {
        const ciphertext = CryptoJS.AES.encrypt(data, password).toString();
        return ciphertext;
    } catch (error) {
        console.error('Error encrypting data:', error);
    }
};

export const decryptData = (ciphertext, password) => {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, password);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    } catch (error) {
        console.error('Error decrypting data:', error);
    }
};
