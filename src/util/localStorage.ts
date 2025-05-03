import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Failed to save data', e);
    }
};

export const getStorageData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);

        if(value != null){
            return JSON.parse(value);
        }
    } catch (e) {
        console.error('Failed to retrive data', e);
    }
};