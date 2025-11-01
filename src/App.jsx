import { Routes, Route } from 'react-router-dom'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import HomeOrListPage from './pages/HomeOrListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import MainPage from './pages/MainPage'


export default function App() {
return (
<div className="min-h-svh bg-white text-gray-900">
<Header />
<Routes>
<Route path="/" element={<MainPage />} />
<Route path="/products" element={<HomeOrListPage />} />
<Route path="/products/:id" element={<ProductDetailPage />} />
<Route path="*" element={<div className="p-8">페이지를 찾을 수 없습니다.</div>} />
</Routes>
<Footer />
</div>
)
}