import { Link } from 'react-router-dom'


export default function MainPage() {
return (
<main className="flex flex-col items-center justify-center min-h-svh bg-gray-50">
<div className="text-center">
<h1 className="text-4xl font-extrabold text-gray-900">MUSINSA · Lite</h1>
<p className="mt-3 text-gray-600">패션의 시작, 지금 로그인하고 쇼핑을 시작하세요!</p>
</div>


<div className="mt-8 flex gap-4">
<Link
to="/login"
className="rounded-xl bg-black px-6 py-3 text-white font-semibold hover:bg-black/90"
>
로그인
</Link>
<Link
to="/signup"
className="rounded-xl border border-black px-6 py-3 font-semibold hover:bg-gray-100"
>
회원가입
</Link>
</div>


<div className="mt-16 text-sm text-gray-500">
<p>로그인 없이 둘러보기</p>
<Link to="/" className="underline hover:text-black">상품 목록 보기</Link>
</div>
</main>
);
}