/**
 * LocalStorage helper functions for storing, retrieving, and removing data
 */

import { encrypt, decrypt } from '../libs/encrypt';

/**
 * Store data in localStorage (encrypted)
 * @param key - The key to store the data under
 * @param value - The value to store (string, number, object, etc.)
 */
export const setLocalStorage = <T>(key: string, value: T): void => {
    try {
        const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
        const encryptedValue = encrypt(serializedValue);
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            window.localStorage.setItem(key, encryptedValue);
        }
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

/**
 * Retrieve data from localStorage (automatically decrypted)
 * @param key - The key to retrieve data for
 * @param defaultValue - Optional default value to return if key doesn't exist
 * @returns The stored value or default value
 */
export const getLocalStorage = <T>(key: string, defaultValue?: T): T | null => {
    try {
        if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
            return defaultValue ?? null;
        }

        const item = window.localStorage.getItem(key);
        if (item === null) {
            return defaultValue ?? null;
        }

        // Decrypt the stored value first
        const decryptedValue = decrypt(item);

        // Try to parse as JSON first, fallback to string
        try {
            return JSON.parse(decryptedValue) as T;
        } catch {
            return decryptedValue as unknown as T;
        }
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue ?? null;
    }
};

/**
 * Remove data from localStorage
 * @param key - The key to remove
 */
export const removeLocalStorage = (key: string): void => {
    try {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            window.localStorage.removeItem(key);
        }
    } catch (error) {
        console.error('Error removing from localStorage:', error);
    }
};

/**
 * Clear all data from localStorage
 */
export const clearLocalStorage = (): void => {
    try {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            window.localStorage.clear();
        }
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
};

/**
 * Check if a key exists in localStorage
 * @param key - The key to check
 * @returns true if key exists, false otherwise
 */
export const hasLocalStorage = (key: string): boolean => {
    try {
        if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
            return false;
        }

        return window.localStorage.getItem(key) !== null;
    } catch (error) {
        console.error('Error checking localStorage:', error);
        return false;
    }
};

/**
 * Get all keys from localStorage
 * @returns Array of all keys in localStorage
 */
export const getLocalStorageKeys = (): string[] => {
    try {
        if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
            return [];
        }

        const keys: string[] = [];
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            if (key) {
                keys.push(key);
            }
        }
        return keys;
    } catch (error) {
        console.error('Error getting localStorage keys:', error);
        return [];
    }
};
