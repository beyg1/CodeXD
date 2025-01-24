import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex bg-slate-400 text-slate-200 font-medium h-20 p-5 "> 
        <Link href="/buttons" className="mx-5 text-2xl hover:text-3xl hover:text-orange-200 ">Buttons</Link>
        <Link href="/skeleton" className="mx-5 text-2xl hover:text-3xl hover:text-orange-200 ">Skeleton</Link>
        <Link href="/avatar" className="mx-5 text-2xl hover:text-3xl hover:text-orange-200 ">Avatars</Link>
      </nav>
      <h1 className="flex h-screen bg-slate-300 font-semibold text-2xl items-center justify-center md:text-3xl lg:text-4xl">
        Hi there, Let`s play with shadCn a little..
      </h1>
    </div>
  );
}
