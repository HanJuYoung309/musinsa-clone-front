// 무신사 느낌의 브랜드/상품 샘플
export const BRANDS = [
'MUSINSA STANDARD', 'THISISNEVERTHAT', 'ADER', 'NIKE', 'NEW BALANCE',
'ANDERSSON BELL', 'CARHARTT', 'DR. MARTENS', 'THE NORTH FACE', 'STUSSY'
]


// placeholder 이미지: seed만 다르게
const img = (seed) => `https://picsum.photos/seed/${seed}/800/1067` // 3:4 근사


export const PRODUCTS = [
{ id: 1001, name: '오버핏 코튼 맨투맨 블랙', brand: BRANDS[0], price: 29900, category: 'men', sub: 'top', color: 'black', size: ['S','M','L','XL'], image: img('m1'), description: '코튼 원단의 미니멀 오버핏 맨투맨.' },
{ id: 1002, name: '크루넥 화이트 티셔츠', brand: BRANDS[1], price: 19900, category: 'men', sub: 'top', color: 'white', size: ['S','M','L','XL'], image: img('m2'), description: '데일리 레이어드 티셔츠.' },
{ id: 1003, name: '하프집 아노락', brand: BRANDS[6], price: 59900, category: 'men', sub: 'outer', color: 'gray', size: ['M','L','XL'], image: img('m3'), description: '가벼운 바람막이 아노락.' },
{ id: 1004, name: '스트레이트 데님 팬츠', brand: BRANDS[2], price: 55900, category: 'men', sub: 'pants', color: 'blue', size: ['S','M','L'], image: img('m4'), description: '깔끔한 스트레이트 실루엣.' },
{ id: 1005, name: '레더 첼시 부츠', brand: BRANDS[7], price: 139000, category: 'men', sub: 'shoes', color: 'black', size: ['250','260','270','280'], image: img('m5'), description: '클래식 첼시 부츠.' },
{ id: 1006, name: '로고 캡', brand: BRANDS[5], price: 35900, category: 'men', sub: 'acc', color: 'navy', size: ['FREE'], image: img('m6'), description: '심플 로고 볼캡.' },


{ id: 2001, name: '하이웨스트 데님', brand: BRANDS[2], price: 65900, category: 'women', sub: 'pants', color: 'blue', size: ['S','M','L'], image: img('w1'), description: '하이웨스트 스트레이트.' },
{ id: 2002, name: '슬림 크롭 가디건', brand: BRANDS[5], price: 49900, category: 'women', sub: 'top', color: 'beige', size: ['S','M','L'], image: img('w2'), description: '크롭 기장의 슬림핏 가디건.' },
{ id: 2003, name: '울 롱 코트', brand: BRANDS[9], price: 179000, category: 'women', sub: 'outer', color: 'black', size: ['S','M','L'], image: img('w3'), description: '미니멀 롱 코트.' },
{ id: 2004, name: '첼시 힐 앵클부츠', brand: BRANDS[7], price: 149000, category: 'women', sub: 'shoes', color: 'black', size: ['230','240','250','260'], image: img('w4'), description: '슬림 앵클 실루엣.' },
{ id: 2005, name: '미니 크로스백', brand: BRANDS[5], price: 45900, category: 'women', sub: 'acc', color: 'brown', size: ['FREE'], image: img('w5'), description: '데일리 미니 백.' },


{ id: 3001, name: '키즈 그래픽 티셔츠', brand: BRANDS[0], price: 15900, category: 'kids', sub: 'top', color: 'white', size: ['110','120','130','140'], image: img('k1'), description: '부드러운 키즈 티셔츠.' },
{ id: 3002, name: '키즈 조거 팬츠', brand: BRANDS[4], price: 24900, category: 'kids', sub: 'pants', color: 'gray', size: ['110','120','130','140'], image: img('k2'), description: '편안한 조거.' },
{ id: 3003, name: '키즈 후디', brand: BRANDS[6], price: 29900, category: 'kids', sub: 'top', color: 'green', size: ['110','120','130','140'], image: img('k3'), description: '도톰한 기모 후디.' },
{ id: 3004, name: '키즈 운동화', brand: BRANDS[3], price: 49900, category: 'kids', sub: 'shoes', color: 'white', size: ['180','190','200','210'], image: img('k4'), description: '가벼운 착화감.' },


{ id: 4001, name: '러닝 티셔츠', brand: BRANDS[3], price: 35900, category: 'sport', sub: 'running', color: 'blue', size: ['S','M','L','XL'], image: img('s1'), description: '흡습속건 러닝 탑.' },
{ id: 4002, name: '트레이닝 조거', brand: BRANDS[6], price: 39900, category: 'sport', sub: 'training', color: 'black', size: ['S','M','L','XL'], image: img('s2'), description: '편안한 트레이닝 팬츠.' },
{ id: 4003, name: '러닝 슈즈', brand: BRANDS[3], price: 89900, category: 'sport', sub: 'running', color: 'gray', size: ['240','250','260','270','280'], image: img('s3'), description: '쿠셔닝 좋은 러닝화.' },
{ id: 4004, name: '아웃도어 재킷', brand: BRANDS[8], price: 129000, category: 'sport', sub: 'outdoor', color: 'khaki', size: ['M','L','XL'], image: img('s4'), description: '내구성 좋은 방풍 재킷.' },


{ id: 5001, name: '스니커즈 574', brand: BRANDS[4], price: 109000, category: 'shoes', sub: 'sneakers', color: 'gray', size: ['240','250','260','270','280'], image: img('sh1'), description: '클래식 스니커즈.' },
{ id: 5002, name: '첼시 부츠', brand: BRANDS[7], price: 139000, category: 'shoes', sub: 'boots', color: 'black', size: ['240','250','260','270','280'], image: img('sh2'), description: '데일리 부츠.' },
{ id: 5003, name: '더비 슈즈', brand: BRANDS[9], price: 159000, category: 'shoes', sub: 'dress', color: 'black', size: ['250','260','270','280'], image: img('sh3'), description: '포멀 더비.' },


{ id: 6001, name: '레더 크로스백', brand: BRANDS[5], price: 79900, category: 'accessory', sub: 'bag', color: 'black', size: ['FREE'], image: img('a1'), description: '미니멀 크로스백.' },
{ id: 6002, name: '볼캡 네이비', brand: BRANDS[5], price: 35900, category: 'accessory', sub: 'cap', color: 'navy', size: ['FREE'], image: img('a2'), description: '로고 볼캡.' },
{ id: 6003, name: '레더 벨트', brand: BRANDS[0], price: 29900, category: 'accessory', sub: 'belt', color: 'brown', size: ['FREE'], image: img('a3'), description: '심플 레더 벨트.' },
{ id: 6004, name: '실버 링', brand: BRANDS[9], price: 45900, category: 'accessory', sub: 'jewelry', color: 'silver', size: ['FREE'], image: img('a4'), description: '미니멀 실버 링.' },


{ id: 7001, name: '오버핏 맨투맨 멜란지', brand: BRANDS[0], price: 31900, category: 'men', sub: 'top', color: 'gray', size: ['S','M','L','XL'], image: img('m7'), description: '멜란지 오버핏 맨투맨.' },
{ id: 7002, name: '그래픽 후드', brand: BRANDS[1], price: 49900, category: 'men', sub: 'top', color: 'black', size: ['M','L','XL'], image: img('m8'), description: '시그니처 그래픽 후드.' },
{ id: 7003, name: '코튼 치노 팬츠', brand: BRANDS[6], price: 54900, category: 'men', sub: 'pants', color: 'beige', size: ['S','M','L','XL'], image: img('m9'), description: '테이퍼드 핏 치노.' },
{ id: 7004, name: '롱 패딩 재킷', brand: BRANDS[8], price: 189000, category: 'women', sub: 'outer', color: 'black', size: ['S','M','L'], image: img('w6'), description: '보온성 좋은 롱패딩.' },
{ id: 7005, name: '테니스 스커트', brand: BRANDS[3], price: 45900, category: 'women', sub: 'pants', color: 'white', size: ['S','M','L'], image: img('w7'), description: '스포티 플리츠 스커트.' },
]