import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import HomeOrListPage from './pages/HomeOrListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { useAuth } from './state/AuthContext'


function Protected({ children }){
const { user, ready } = useAuth()
if (!ready) return <div className="p-8">로딩 중…</div>
if (!user) return <Navigate to="/login" replace />
return children
}


export default function App(){
return (
<div className="min-h-svh bg-white text-gray-900">
<Header />
<Routes>
<Route path="/" element={<HomeOrListPage />} />
<Route path="/products/:id" element={<ProductDetailPage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignupPage />} />
{/* 예시: 보호 페이지
<Route path="/orders" element={<Protected><OrdersPage/></Protected>} />
*/}
<Route path="*" element={<div className="p-8">페이지를 찾을 수 없습니다.</div>} />
</Routes>
<Footer />
</div>
)
}