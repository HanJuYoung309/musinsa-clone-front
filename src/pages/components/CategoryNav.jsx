import { useNavigate, useSearchParams } from 'react-router-dom'


const CATEGORIES = [
{ key: 'all', label: '전체' },
{ key: 'men', label: '남성' },
{ key: 'women', label: '여성' },
{ key: 'sport', label: '스포츠' },
{ key: 'shoes', label: '신발' },
{ key: 'accessory', label: '액세서리' },
]


export default function CategoryNav() {
const [params] = useSearchParams()
const navigate = useNavigate()
const active = params.get('category') || 'all'


function onClick(key) {
const next = new URLSearchParams(params)
if (key === 'all') next.delete('category')
else next.set('category', key)
next.delete('page')
navigate({ pathname: '/', search: next.toString() ? `?${next}` : '' })
}


return (
<nav className="hidden md:flex items-center gap-2">
{CATEGORIES.map(c => (
<button
key={c.key}
onClick={() => onClick(c.key)}
className={
'rounded-full px-3 py-1 text-sm border transition ' +
(active === c.key ? 'bg-black text-white border-black' : 'hover:bg-gray-100')
}
>
{c.label}
</button>
))}
</nav>
)
}