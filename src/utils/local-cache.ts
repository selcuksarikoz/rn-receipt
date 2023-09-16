import AsyncStorage from '@react-native-async-storage/async-storage';

class CacheLocalStorage {

  private _cache 

  constructor(){
    this._cache = AsyncStorage
  }

  public async getData(keyName: string){
    try {
      const result = await this._cache.getItem(keyName)
      return result !== null ? JSON.parse(result) : undefined
    } catch (error) {
      return error
    }
  }

  public async getAllData(){
    try {
      const keys = await this._cache.getAllKeys()
      const allData = await this._cache.multiGet(keys)
      const converted = []

      for(let item of allData) {
        converted.push(JSON.parse(item[1] as string))
      }

      return converted
    } catch(error) {
      return error
    }
  }

  public async removeItem(keyName: string) {
    const result = await this._cache.removeItem(keyName)
    return result
  }

  public async setData(keyName: string, data: object | string) {
    try {
      const result = await this._cache.setItem(keyName, JSON.stringify(data))
      return result
    } catch (error) {
      return error
    }
  }

}

export const LocalCache = new CacheLocalStorage()