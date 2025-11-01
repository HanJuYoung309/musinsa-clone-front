import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar({ compact = false }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const [params] = useSearchParams();
  useEffect(() => { setQ(params.get("q") || ""); }, [params]);

  function onSubmit(e) {
    e.preventDefault();
    const next = new URLSearchParams(params);
    q ? next.set("q", q) : next.delete("q");
    navigate({ pathname: "/products", search: next.toString() ? `?${next}` : "" });
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="검색어를 입력하세요"
        className={
          "w-full rounded-full border px-4 pr-9 outline-none transition " +
          (compact ? "h-9 text-sm focus:ring-1 focus:ring-black/50" : "h-10 text-[15px] focus:ring-2 focus:ring-black/60")
        }
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">🔍</button>
    </form>
  );
}
