import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../lib/mockApi'
import ProductCard from './components/ProductCard'
import SortSelect from './components/SortSelect'
import SkeletonCard from './components/SkeletonCard'


export default function HomeOrListPage(){
const [params] = useSearchParams()
const q = params.get('q') || ''
const category = params.get('category') || 'all'
const sort = params.get('sort') || 'popular'


const [loading, setLoading] = useState(true)
const [data, setData] = useState({ content: [], total: 0 })


useEffect(() => {
let cancel = false
setLoading(true)
fetchProducts({ q, category, sort }).then(res => {
if (!cancel) { setData(res); setLoading(false) }
})
return () => { cancel = true }
}, [q, category, sort])


return (
<main className="mx-auto max-w-6xl px-4">
<section className="flex items-center justify-between py-4">
<h2 className="text-lg font-semibold">상품</h2>
<SortSelect />
</section>


{loading ? (
<div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
{Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
</div>
) : (
<div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
{data.content.map(p => <ProductCard key={p.id} product={p} />)}
{data.content.length === 0 && (
<div className="col-span-full py-20 text-center text-gray-500">검색 조건에 맞는 상품이 없습니다.</div>
)}
</div>
)}
</main>
)
}