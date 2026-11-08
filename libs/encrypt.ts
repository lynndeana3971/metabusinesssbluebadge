import CryptoJS from 'crypto-js';

const secretKey = "HDNDT-JDHT8FNEK-JJHR";

export const encrypt = (text: string): string => {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
};

export const decrypt = (encryptedText: string): string => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Decryption error:', error);
        return encryptedText;
    }
};
