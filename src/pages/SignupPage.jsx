import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'


export default function SignupPage(){
const { signup } = useAuth()
const nav = useNavigate()
const [form, setForm] = useState({ email: '', password: '', name: '' })
const [err, setErr] = useState('')
const [ok, setOk] = useState('')
const [loading, setLoading] = useState(false)


const onSubmit = async (e) => {
e.preventDefault(); setErr(''); setOk(''); setLoading(true)
try { await signup(form); setOk('가입이 완료되었습니다. 로그인해 주세요.'); setTimeout(()=>nav('/login'), 800) }
catch (e) { setErr(e.message || '회원가입 실패') }
finally { setLoading(false) }
}


return (
<main className="container-mss py-10">
<div className="mx-auto w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
<h1 className="mb-2 text-2xl font-bold">회원가입</h1>
<p className="mb-6 text-sm text-gray-500">필수 정보를 입력해 주세요.</p>
{err && <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">{err}</div>}
{ok && <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-700">{ok}</div>}
<form onSubmit={onSubmit} className="space-y-4">
<div>
<label className="mb-1 block text-sm font-medium">이름</label>
<input className="input" value={form.name} onChange={e=>setForm(v=>({ ...v, name: e.target.value }))} required/>
</div>
<div>
<label className="mb-1 block text-sm font-medium">이메일</label>
<input type="email" className="input" value={form.email} onChange={e=>setForm(v=>({ ...v, email: e.target.value }))} required/>
</div>
<div>
<label className="mb-1 block text-sm font-medium">비밀번호</label>
<input type="password" className="input" value={form.password} onChange={e=>setForm(v=>({ ...v, password: e.target.value }))} required/>
</div>
<button className="btn-primary w-full" disabled={loading}>{loading ? '가입 중…' : '회원가입'}</button>
</form>
<div className="mt-4 text-center text-sm">
이미 계정이 있으신가요? <Link to="/login" className="link">로그인</Link>
</div>
</div>
</main>
)
}