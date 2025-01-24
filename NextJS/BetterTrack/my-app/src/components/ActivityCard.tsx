"use client"

import { Edit2, Play, Pause, StopCircle, Bell, BellOff } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Activity } from '@/types/activity'
import { formatTime } from '@/lib/utils'

interface ActivityCardProps {
  activity: Activity
  onRename: (id: number, newName: string) => void
  onToggleTimer: (id: number) => void
  onReset: (id: number) => void
  onToggleAlert: (id: number) => void
}

export function ActivityCard({
  activity,
  onRename,
  onToggleTimer,
  onReset,
  onToggleAlert
}: ActivityCardProps) {
  return (
    <Card 
      className={`bg-gradient-to-br ${activity.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${activity.isRunning ? 'shake-animation' : ''}`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <Input
            value={activity.name}
            onChange={(e) => onRename(activity.id, e.target.value)}
            className="text-lg font-semibold bg-transparent border-none focus:ring-0 text-white placeholder-white/70"
          />
          <Edit2 className="w-4 h-4 text-white/70" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-4xl font-bold text-center my-4 font-mono ${activity.isRunning ? 'text-red-500' : 'text-white'}`}>
          {formatTime(activity.time)}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center space-x-2">
        <Button
          onClick={() => onToggleTimer(activity.id)}
          variant="secondary"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white"
        >
          {activity.isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          onClick={() => onReset(activity.id)}
          variant="secondary"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white"
        >
          <StopCircle className="h-4 w-4" />
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => onToggleAlert(activity.id)}
                variant="secondary"
                size="icon"
                className="bg-white/20 hover:bg-white/30 text-white"
              >
                {activity.alertEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {activity.alertEnabled ? 'off' : 'on'} alert after 15 minutes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  )
}
