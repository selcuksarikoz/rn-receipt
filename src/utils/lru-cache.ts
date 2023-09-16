class MapCache {
  private _cache = new Map<string, string | object>()
  
  public setCache(keyName: string, data: string | object) {
    this._cache.set(keyName, data)
  }

  public getCache(keyName: string): string | object | undefined {
    return this._cache.get(keyName)
  }

  public removeCache(keyName: string): boolean {
    return this._cache.delete(keyName)
  }

}

export const LRUCache = new MapCache()