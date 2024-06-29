"use client"

import Button from "@/components/Button";
import GAButton from "@/components/GAButton";
import { useRouter } from "next/navigation";


export default function Default() {
  const router = useRouter();

  return (
      <div className='flex gap-4 h-screen items-center justify-center' >
        <GAButton />
    <Button title='Open HamburgerMenu' onClick={()=>{
      router.push('/hamburgerMenu')
      
      }} />

      </div>
  );
}
