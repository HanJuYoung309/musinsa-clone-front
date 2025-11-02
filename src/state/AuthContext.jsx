import { createContext, useContext, useEffect, useState } from 'react'
import { authApi } from '../lib/authApi'


const AuthCtx = createContext(null)
export function useAuth(){ return useContext(AuthCtx) }


export function AuthProvider({ children }){
const [user, setUser] = useState(null)
const [ready, setReady] = useState(false)


useEffect(() => {
// 앱 로드시 accessToken이 있으면 /me 호출
const token = localStorage.getItem('accessToken')
if (!token) { setReady(true); return }
authApi.me().then(setUser).catch(()=>{}).finally(()=>setReady(true))
}, [])


async function login(form){
await authApi.login(form)
const me = await authApi.me()
setUser(me)
}
async function signup(form){ await authApi.signup(form) }
async function logout(){ await authApi.logout(); setUser(null) }


return (
<AuthCtx.Provider value={{ user, ready, login, signup, logout }}>
{children}
</AuthCtx.Provider>
)
}