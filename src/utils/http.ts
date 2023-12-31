const DEFAULT_HEADERS = {
  'Content-type': 'application/json; charset=UTF-8',
} as unknown as Headers

export function Http(){
  async function Post<T,R>(url: string, body?: T, headers?: Headers) {
    return await fetch(url, { headers: { ...DEFAULT_HEADERS, ...headers }, method: "post", body: body ? JSON.stringify(body) : undefined })
    .then(res => res.json())
  }

  async function Get<T,R>(url: string, params?: T, headers?: Headers): Promise<R> {
    const _url = new URL(url)
    const _params = new URLSearchParams()
    for (const key in params) {
      _params.append(key, String(params[key]))
    }
    _url.search = String(_params)
    return await fetch(String(_url), { headers: { ...DEFAULT_HEADERS, ...headers }, method: "get", })
    .then(res => res.json())
  }

  return {
    Post,
    Get
  }
}