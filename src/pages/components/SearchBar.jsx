import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'


export default function SearchBar() {
const [q, setQ] = useState('')
const navigate = useNavigate()
const [params] = useSearchParams()
useEffect(() => { setQ(params.get('q') || '') }, [params])


function onSubmit(e) {
e.preventDefault()
const next = new URLSearchParams(params)
if (q) next.set('q', q); else next.delete('q')
navigate({ pathname: '/', search: next.toString() ? `?${next}` : '' })
}


return (
<form onSubmit={onSubmit} className="relative w-64">
<input
value={q}
onChange={(e) => setQ(e.target.value)}
placeholder="오버핏 블랙 맨투맨"
className="w-full rounded-full border px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-black/60"
/>
<button className="absolute right-2 top-1.5 text-gray-500 hover:text-black" aria-label="검색">🔍</button>
</form>
)
}