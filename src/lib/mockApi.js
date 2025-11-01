import { PRODUCTS } from './product'


function sleep(ms){ return new Promise(r=>setTimeout(r, ms)) }


export async function fetchProducts({ q = '', category = 'all', sub = '', sort = 'popular', brand = '' }){
await sleep(200)
let list = [...PRODUCTS]


if (category && category !== 'all') list = list.filter(p => p.category === category)
if (sub) list = list.filter(p => p.sub === sub)
if (brand) list = list.filter(p => p.brand === brand)
if (q) {
const norm = q.trim().toLowerCase()
list = list.filter(p => (
p.name.toLowerCase().includes(norm) ||
p.brand.toLowerCase().includes(norm) ||
(p.description||'').toLowerCase().includes(norm)
))
}


if (sort === 'price_asc') list.sort((a,b)=>a.price-b.price)
if (sort === 'price_desc') list.sort((a,b)=>b.price-a.price)
if (sort === 'latest') list.sort((a,b)=>b.id-a.id)


return { content: list, total: list.length }
}


export async function fetchProductById(id){
await sleep(150)
const item = PRODUCTS.find(p => String(p.id) === String(id))
if (!item) throw new Error('상품을 찾을 수 없습니다.')
return item
}