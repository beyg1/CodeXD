// Mark this component as a client-side component since it uses hooks and interactivity
'use client'

// Import toast notifications and their styles
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import custom components
import { ActivityCard } from '@/components/ActivityCard'
import { AddActivityCard } from '@/components/AddActivityCard'
import { Header } from '@/components/Header'
import { ShakeAnimation } from '@/styles/animations'

// Import custom hooks and data
import { useActivityTimer } from '@/hooks/useActivityTimer'
import { defaultActivities } from '@/constants/categories'

// Main component for the time tracking application
export default function TimeTracker() {
  // Use our custom hook to manage all timer-related state and functions
  // This includes the list of activities and functions to manipulate them
  const {
    activities,     // Array of activity objects containing timer data
    toggleTimer,    // Function to start/stop a specific timer
    resetTimer,     // Function to reset a specific timer to 0
    renameActivity, // Function to change the name of an activity
    addNewActivity, // Function to create a new activity
    toggleAlert     // Function to enable/disable alerts for an activity
  } = useActivityTimer(defaultActivities)

  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      {/* Add shake animation styles for running timers */}
      <ShakeAnimation />

      {/* Page header component */}
      <Header />

      {/* Responsive grid layout for activity cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Map through activities array to render individual activity cards */}
        {activities.map(activity => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onToggleTimer={toggleTimer}
            onReset={resetTimer}
            onRename={renameActivity}
            onToggleAlert={toggleAlert}
          />
        ))}

        {/* Card for adding new activities */}
        <AddActivityCard onClick={addNewActivity} />
      </div>

      {/* Toast container for notifications, positioned at bottom-right */}
      <ToastContainer position="bottom-right" />
    </div>
  )
}