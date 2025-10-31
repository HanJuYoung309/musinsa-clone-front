import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../lib/mockApi'
import ProductCard from './components/ProductCard'
export default function ProductDetailPage(){
const { id } = useParams()
const [loading, setLoading] = useState(true)
const [item, setItem] = useState(null)
const [size, setSize] = useState('')


useEffect(() => {
let cancel = false
setLoading(true)
fetchProductById(id).then(res => { if (!cancel) { setItem(res); setLoading(false) } })
.catch(()=> setLoading(false))
return () => { cancel = true }
}, [id])


if (loading) return <Skeleton />
if (!item) return <main className="mx-auto max-w-6xl px-4 py-12 text-center text-gray-600">상품을 찾을 수 없습니다.</main>


return (
<main className="mx-auto max-w-6xl px-4">
<div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
<div className="overflow-hidden rounded-2xl bg-gray-100">
<img src={item.image} alt={item.name} className="w-full object-cover" />
</div>
<div className="py-2">
<div className="text-sm text-gray-500">{item.brand}</div>
<h1 className="mt-1 text-2xl font-bold">{item.name}</h1>
<div className="mt-2 text-xl font-semibold">{new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(item.price)}</div>


<p className="mt-4 text-sm text-gray-700 leading-relaxed">{item.description}</p>


<div className="mt-6">
<div className="mb-2 text-sm font-medium">사이즈 선택</div>
<div className="flex flex-wrap gap-2">
{item.size.map(s => (
<button key={s} onClick={()=>setSize(s)} className={'rounded-md border px-3 py-1 text-sm ' + (size===s ? 'bg-black text-white border-black' : 'hover:bg-gray-100')}>{s}</button>
))}
</div>
</div>


<div className="mt-6 flex gap-3">
<button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90">장바구니 담기</button>
<button className="rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-gray-100">바로 구매</button>
</div>
</div>
</div>


{/* 함께 본 상품 (데모: 같은 카테고리 상품) */}
<section className="mt-12">
<h3 className="mb-3 text-lg font-semibold">함께 본 상품</h3>
<div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
{MOCK_NEIGHBORS(item).map(p => <ProductCard key={p.id} product={p} />)}
</div>
</section>
</main>
)
}


// 간단 추천: 동일 카테고리 Top-N
const ALL = [
// detail에서 import 대신 간단 복붙해도 되고, 실제로는 API/상태로 공유하세요.
]
function MOCK_NEIGHBORS(item){ return ALL.filter(p=>p?.category===item?.category && p?.id!==item?.id).slice(0,5) }