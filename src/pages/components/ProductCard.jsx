import { Link } from 'react-router-dom'


export default function ProductCard({ product }){
return (
<Link to={`/products/${product.id}`} className="group block">
<div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
<img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
</div>
<div className="pt-2">
<div className="text-[11px] text-gray-500">{product.brand}</div>
<div className="text-[13px] font-medium leading-tight line-clamp-1">{product.name}</div>
<div className="mt-0.5 text-[13px] font-semibold">{new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(product.price)}</div>
</div>
</Link>
)
}