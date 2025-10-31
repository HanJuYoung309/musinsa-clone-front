const MOCK_PRODUCTS = [
{ id: 1001, name: '오버핏 블랙 맨투맨', brand: 'MUSINSA STANDARD', price: 29900, category: 'men', color: 'black', size: ['S','M','L','XL'], image: 'https://picsum.photos/seed/black_sweat/600/800', description: '부드러운 코튼 소재의 오버핏 맨투맨.' },
{ id: 1002, name: '크루넥 화이트 티셔츠', brand: 'THISISNEVERTHAT', price: 19900, category: 'men', color: 'white', size: ['S','M','L','XL'], image: 'https://picsum.photos/seed/white_tee/600/800', description: '밀도 높은 원단의 레귤러 핏 반팔 티셔츠.' },
{ id: 1003, name: '하이웨스트 데님 팬츠', brand: 'ADER', price: 55900, category: 'women', color: 'blue', size: ['S','M','L'], image: 'https://picsum.photos/seed/denim_pants/600/800', description: '하이웨스트 스트레이트 핏 데님.' },
{ id: 1004, name: '러닝 슈즈', brand: 'NIKE', price: 89900, category: 'sport', color: 'gray', size: ['240','250','260','270','280'], image: 'https://picsum.photos/seed/running_shoes/600/800', description: '쿠셔닝이 좋은 초경량 러닝 슈즈.' },
{ id: 1005, name: '레더 첼시 부츠', brand: 'DR. MARTENS', price: 139000, category: 'shoes', color: 'black', size: ['240','250','260','270','280'], image: 'https://picsum.photos/seed/chelsea_boots/600/800', description: '클래식 실루엣의 레더 첼시 부츠.' },
{ id: 1006, name: '미니 크로스백', brand: 'ANDERSSON BELL', price: 45900, category: 'accessory', color: 'brown', size: ['ONE'], image: 'https://picsum.photos/seed/cross_bag/600/800', description: '데일리로 가볍게 메기 좋은 미니 크로스백.' },
]


function sleep(ms){ return new Promise(r=>setTimeout(r, ms)) }


export async function fetchProducts({ q = '', category = 'all', sort = 'popular' }){
await sleep(250)
let list = [...MOCK_PRODUCTS]
if (category && category !== 'all') list = list.filter(p => p.category === category)
if (q) {
const norm = q.trim().toLowerCase()
list = list.filter(p => p.name.toLowerCase().includes(norm) || p.brand.toLowerCase().includes(norm))
}
if (sort === 'price_asc') list.sort((a,b)=>a.price-b.price)
if (sort === 'price_desc') list.sort((a,b)=>b.price-a.price)
return { content: list, total: list.length }
}


export async function fetchProductById(id){
await sleep(200)
const item = MOCK_PRODUCTS.find(p => String(p.id) === String(id))
if (!item) throw new Error('상품을 찾을 수 없습니다.')
return item
}