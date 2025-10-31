import { Link } from 'react-router-dom'


export default function ProductCard({ product }){
return (
<Link to={`/products/${product.id}`} className="group block">
<div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
<img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
</div>
<div className="pt-2">
<div className="text-xs text-gray-500">{product.brand}</div>
<div className="line-clamp-1 text-sm font-medium">{product.name}</div>
<div className="mt-1 font-semibold">{new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(product.price)}</div>
</div>
</Link>
)
}