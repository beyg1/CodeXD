import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to NextAuth Integration with Next.js
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To Learn how to implement authentication in Next.js application, we will study AuthJs docs
              <br />                                                                
              <Link
                href="https://authjs.dev/getting-started/installation?framework=Next.js"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                NextAuth Documentation
              </Link>
              <br />
              
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
