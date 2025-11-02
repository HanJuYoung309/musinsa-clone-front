const API_BASE = import.meta.env.VITE_API_URL || '' // 예: http://localhost:8080


async function request(path, { method = 'GET', headers = {}, body, retry = true } = {}){
const url = API_BASE + path
const h = { 'Content-Type': 'application/json', ...headers }
const token = tokenStore.access
if (token) h['Authorization'] = `Bearer ${token}`


const res = await fetch(url, { method, headers: h, body: body ? JSON.stringify(body) : undefined, credentials: 'include' })


if (res.status === 401 && retry && tokenStore.refresh) {
// 토큰 재발급 시도
const ok = await refreshToken()
if (ok) return request(path, { method, headers, body, retry: false })
}


if (!res.ok) {
let msg = `HTTP ${res.status}`
try { const e = await res.json(); msg = e.message || JSON.stringify(e) } catch {}
throw new Error(msg)
}
const ct = res.headers.get('content-type') || ''
return ct.includes('application/json') ? res.json() : res.text()
}


export async function refreshToken(){
try {
const rt = tokenStore.refresh
if (!rt) return false
const data = await fetch(API_BASE + '/api/auth/refresh', {
method: 'POST', headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ refreshToken: rt }),
}).then(r => r.ok ? r.json() : Promise.reject(r))
tokenStore.access = data.accessToken
tokenStore.refresh = data.refreshToken
return true
} catch { return false }
}


export function setTokens({ accessToken, refreshToken }){
tokenStore.access = accessToken
tokenStore.refresh = refreshToken
}


export function clearTokens(){ tokenStore.access = ''; tokenStore.refresh = '' }


export const http = {
get: (p) => request(p),
post: (p, b) => request(p, { method: 'POST', body: b }),
put: (p, b) => request(p, { method: 'PUT', body: b }),
del: (p) => request(p, { method: 'DELETE' }),
}