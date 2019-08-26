import AsyncStorage from '@react-native-community/async-storage';

export const createFave = async faveId => {
  try {
    console.log(faveId);
    await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, faved_on: new Date()}),
    );
    return true;
  } catch (e) {
    return new Error(e);
  }
};

export const deleteFave = async faveId => {
  try {
    await AsyncStorage.removeItem(`${faveId}`);
    return true;
  } catch (e) {
    throw e;
  }
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (e) {
    return e;
  }
};
