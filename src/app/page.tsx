import Image from "next/image";
import Navbar from "@/components/Navbar";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen bg-gradient-to-b from-blue-300 to-red-300"></div>
    </main>
  );
}
