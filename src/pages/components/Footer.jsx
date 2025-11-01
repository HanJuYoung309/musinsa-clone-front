export default function Footer() {
  return (
    <footer className="border-t mt-14">
      <div className="container-mss py-8 text-[12px] text-gray-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MUSINSA · Lite</p>
        <nav className="flex gap-4">
          <a className="hover:text-black" href="#">이용약관</a>
          <a className="hover:text-black" href="#">개인정보처리방침</a>
          <a className="hover:text-black" href="#">고객센터</a>
        </nav>
      </div>
    </footer>
  );
}
