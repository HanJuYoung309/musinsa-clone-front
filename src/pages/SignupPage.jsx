export default function SignupPage() {
return (
<main className="flex flex-col items-center justify-center min-h-svh bg-gray-50">
<h2 className="text-2xl font-bold mb-6">회원가입</h2>
<form className="flex flex-col gap-4 w-80">
<input type="text" placeholder="이름" className="border rounded-md p-2" />
<input type="email" placeholder="이메일" className="border rounded-md p-2" />
<input type="password" placeholder="비밀번호" className="border rounded-md p-2" />
<button className="bg-black text-white rounded-md p-2 font-semibold">가입하기</button>
</form>
</main>
)
}