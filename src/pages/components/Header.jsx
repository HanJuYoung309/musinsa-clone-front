import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import CategoryNav from './CategoryNav'
import SearchBar from './SearchBar'


export default function Header() {
return (
<header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-6">
<Link to="/" className="text-xl font-extrabold tracking-tight">MUSINSA<span className="text-gray-400">·Lite</span></Link>
<CategoryNav />
</div>
<div className="flex items-center gap-4">
<SearchBar />
<Link to="/cart" className="text-sm text-gray-600 hover:text-black">장바구니</Link>
</div>
</div>
</header>
)
}