import { useNavigate, useSearchParams } from 'react-router-dom'


export default function SortSelect(){
const [params] = useSearchParams()
const navigate = useNavigate()
const sort = params.get('sort') || 'popular'
const opts = [
{ key: 'popular', label: '인기순' },
{ key: 'latest', label: '최신순' },
{ key: 'price_asc', label: '낮은가격' },
{ key: 'price_desc', label: '높은가격' },
]
function onChange(e){
const next = new URLSearchParams(params)
next.set('sort', e.target.value)
navigate({ pathname: '/', search: `?${next}` })
}
return (
<select value={sort} onChange={onChange} className="rounded-md border px-2 py-1 text-sm">
{opts.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
</select>
)
}