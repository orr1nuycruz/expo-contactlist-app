import AsyncStorage from '@react-native-community/async-storage';

export const getItemFromAsyncStorage = (key: string) => {
    return AsyncStorage.getItem(key);
}

export const getDataFromAsyncStorage = (key: String) =>{
    
}

export const storeIn = (key: string, value: any) => {
    AsyncStorage.setItem(key, value);
}

export const storeInObject = (key: string, value: any) => {
    const jsonValue = JSON.stringify(value)
    AsyncStorage.setItem(key, jsonValue);
}

export const removeObject = (key: string) => {
    AsyncStorage.removeItem(key);
}

export const clearStorage = (props:any) => {
    const { navigation } = props
    AsyncStorage.clear();
    navigation.navigate("CONTACTINTRO");
}