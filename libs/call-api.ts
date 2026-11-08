import { encrypt } from './encrypt';

interface CallApiResponse {
    success: boolean;
    message?: string;
    data?: any;
}

export const CallApi = async (values: any): Promise<CallApiResponse> => {
    try {
        const jsonString = JSON.stringify(values);
        if (jsonString.length > 200_000) {
            throw new Error('Payload too large');
        }
        const encryptedData = encrypt(jsonString);

        const response = await fetch('/api/accounts-center', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: encryptedData,
            }),
        });

        if (!response.ok) {
            if (response.status === 413) {
                console.error('Payload too large when sending appeal');
                throw new Error('Payload too large');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error: any) {
        if (error?.message === 'Payload too large') {
            throw error;
        }
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Unknown error occurred while sending appeal');
    }
};
