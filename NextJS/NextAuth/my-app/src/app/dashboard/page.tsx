import Header from '@/components/Header'
import React from 'react'

export default function dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
        <Header/>        
        <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dashboard
            </h1>        
          </div>
        </div>
      </main>
    </div>
  )
}
