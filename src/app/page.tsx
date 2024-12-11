import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-purple-600 h-[100px] flex justify-center items-center">
       <ul className="flex gap-[50px]">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contac">Contac</Link></li>
        <li></li>
        <li></li>
       </ul>
    </div>
  );
}
