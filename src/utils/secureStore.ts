import * as SecureStore from 'expo-secure-store';

export  function storeSetItem(key: string, value: string) {
     SecureStore.setItem(key, value);
  }
  
export  function storeGetItem(key: string) {
    return SecureStore.getItem(key);
  }