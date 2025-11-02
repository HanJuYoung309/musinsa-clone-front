import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'


export default function LoginPage(){
const { login } = useAuth()
const nav = useNavigate()
const [form, setForm] = useState({ email: '', password: '' })
const [err, setErr] = useState('')
const [loading, setLoading] = useState(false)


const onSubmit = async (e) => {
e.preventDefault(); setErr(''); setLoading(true)
try { await login(form); nav('/') } catch (e) { setErr(e.message || '로그인 실패') } finally { setLoading(false) }
}


return (
<main className="container-mss py-10">
<div className="mx-auto w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
<h1 className="mb-2 text-2xl font-bold">로그인</h1>
<p className="mb-6 text-sm text-gray-500">이메일과 비밀번호를 입력해 주세요.</p>
{err && <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">{err}</div>}
<form onSubmit={onSubmit} className="space-y-4">
<div>
<label className="mb-1 block text-sm font-medium">이메일</label>
<input type="email" className="input" value={form.email}
onChange={e=>setForm(v=>({ ...v, email: e.target.value }))} required/>
</div>
<div>
<label className="mb-1 block text-sm font-medium">비밀번호</label>
<input type="password" className="input" value={form.password}
onChange={e=>setForm(v=>({ ...v, password: e.target.value }))} required/>
</div>
<button className="btn-primary w-full" disabled={loading}>{loading ? '로그인 중…' : '로그인'}</button>
</form>
<div className="mt-4 text-center text-sm">
아직 회원이 아니신가요? <Link to="/signup" className="link">회원가입</Link>
</div>
</div>
</main>
)
}