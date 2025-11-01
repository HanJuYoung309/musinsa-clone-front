import { Link, useSearchParams } from 'react-router-dom'


export default function MegaMenu({ openKey, categories, onClose }){
if (!openKey) return null
const cat = categories.find(c => c.key === openKey)
if (!cat) return null


return (
<div className="absolute left-0 right-0 top-full border-b bg-white/95 backdrop-blur">
<div className="mx-auto max-w-[1200px] px-4 py-4 grid grid-cols-2 md:grid-cols-5 gap-3 text-[14px]">
{cat.children.map(ch => (
<Link
key={ch.key}
to={`/products?category=${cat.key}&sub=${ch.key}`}
className="rounded-md px-3 py-2 hover:bg-gray-100"
onClick={onClose}
>
{ch.label}
</Link>
))}
</div>
</div>
)
}