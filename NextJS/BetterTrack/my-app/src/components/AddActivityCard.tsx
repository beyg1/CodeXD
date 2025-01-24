"use client"

import { PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface AddActivityCardProps {
  onClick: () => void
}

export function AddActivityCard({ onClick }: AddActivityCardProps) {
  return (
    <Card 
      className="bg-gradient-to-br from-gray-200 to-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 transform hover:scale-105 cursor-pointer" 
      onClick={onClick}
    >
      <PlusCircle className="w-12 h-12 text-gray-800 mb-4" />
      <Button
        variant="secondary"
        className="bg-gray-800 hover:bg-gray-700 text-white w-full"
      >
        Add New Activity
      </Button>
    </Card>
  )
}
