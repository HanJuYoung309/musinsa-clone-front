import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import SearchBar from './SearchBar'
import MegaMenu from './MegaMenu'
import { CATEGORIES } from "../../constants/categories";
import { useState } from 'react'


export default function Header(){
const [openKey, setOpenKey] = useState('')


return (
<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
{/* 상단바 */}
<div className="container-mss h-12 flex items-center justify-between">
<Link to="/" className="text-[22px] font-extrabold tracking-tight leading-none">
MUSINSA<span className="text-gray-400">·Lite</span>
</Link>
<nav className="hidden md:flex items-center gap-6 text-sm">
<Link to="/login" className="hover:opacity-70">로그인</Link>
<span className="text-gray-300">|</span>
<Link to="/signup" className="hover:opacity-70">회원가입</Link>
</nav>
</div>


{/* 카테고리 + 검색 */}
<div className="relative">
<div className="container-mss h-14 flex items-center justify-between gap-4">
<nav className="flex items-center gap-4 text-[13px] font-semibold">
{CATEGORIES.map(c => (
<button
key={c.key}
onMouseEnter={() => setOpenKey(c.key)}
onMouseLeave={() => setOpenKey('')}
onClick={() => setOpenKey(o => o === c.key ? '' : c.key)}
className={"px-2 py-1 border-b-2 " + (openKey===c.key ? 'border-black' : 'border-transparent hover:border-gray-300')}
>
{c.label}
</button>
))}
</nav>
<div className="flex-1 max-w-[380px]"><SearchBar compact /></div>
</div>
<div onMouseLeave={() => setOpenKey('')}>
<MegaMenu openKey={openKey} categories={CATEGORIES} onClose={()=>setOpenKey('')} />
</div>
</div>
</header>
)
}