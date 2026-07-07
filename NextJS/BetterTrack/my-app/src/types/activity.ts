export interface Activity {
  id: number
  name: string
  time: number
  isRunning: boolean
  color: string
  alertEnabled: boolean
  alertTime: number
  lastUpdate: number
  goalMinutes: number
  kind: 'intentional' | 'leisure'
}
