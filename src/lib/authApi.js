import { http, setTokens, clearTokens } from "./https"; 


export const authApi = {
async signup({ email, password, name }){
await http.post('/api/auth/signup', { email, password, name })
// 보통 로그인 화면으로 이동하게 합니다. (토큰 미발급)
},
async login({ email, password }){
const data = await http.post('/api/auth/login', { email, password })
setTokens(data)
return data
},
async me(){ return http.get('/api/auth/me') },
async logout(){
try {
const refreshToken = localStorage.getItem('refreshToken')
if (refreshToken) {
await http.post('/api/auth/logout', { refreshToken })
}
} finally {
clearTokens()
}
},
}