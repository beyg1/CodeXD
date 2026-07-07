export const categoryColors: { [key: string]: string } = {
  "Entertainment": "bg-[#D9A8B0]",
  "Learning": "bg-[#8EBFCC]",
  "Working": "bg-[#79B28F]",
  "Social Media": "bg-[#D9BE72]",
  "New Activity Rose": "bg-[#C993A5]",
  "New Activity Teal": "bg-[#72B7AE]",
  "New Activity Lavender": "bg-[#A8A0D6]",
  "New Activity Coral": "bg-[#D99A7A]",
  "default": "bg-[#A9B8D6]"
}

export const newActivityColors = [
  categoryColors["New Activity Rose"],
  categoryColors["New Activity Teal"],
  categoryColors["New Activity Lavender"],
  categoryColors["New Activity Coral"],
]

export const defaultActivities = [
  { id: 1, name: "Entertainment", time: 0, isRunning: false, color: categoryColors["Entertainment"], alertEnabled: true, alertTime: 45 * 60, goalMinutes: 45, kind: 'leisure' as const, lastUpdate: 0 },
  { id: 2, name: "Learning", time: 0, isRunning: false, color: categoryColors["Learning"], alertEnabled: true, alertTime: 60 * 60, goalMinutes: 60, kind: 'intentional' as const, lastUpdate: 0 },
  { id: 3, name: "Working", time: 0, isRunning: false, color: categoryColors["Working"], alertEnabled: true, alertTime: 120 * 60, goalMinutes: 120, kind: 'intentional' as const, lastUpdate: 0 },
  { id: 4, name: "Social Media", time: 0, isRunning: false, color: categoryColors["Social Media"], alertEnabled: true, alertTime: 30 * 60, goalMinutes: 30, kind: 'leisure' as const, lastUpdate: 0 },
]
