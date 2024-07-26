'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/client/home')
  })
  return (
    <h1>稍等正在加载中···</h1>
  );
}
