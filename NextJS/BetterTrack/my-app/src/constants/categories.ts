export const categoryColors: { [key: string]: string } = {
  "Entertainment": "from-pink-400 to-red-400",
  "Learning": "from-blue-400 to-indigo-400",
  "Working": "from-green-400 to-teal-400",
  "Social Media": "from-yellow-400 to-orange-400",
  "default": "from-purple-400 to-pink-400"
}

export const defaultActivities = [
  { id: 1, name: "Entertainment", time: 0, isRunning: false, color: categoryColors["Entertainment"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
  { id: 2, name: "Learning", time: 0, isRunning: false, color: categoryColors["Learning"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
  { id: 3, name: "Working", time: 0, isRunning: false, color: categoryColors["Working"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
  { id: 4, name: "Social Media", time: 0, isRunning: false, color: categoryColors["Social Media"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
]
