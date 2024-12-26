'use client'

import { useAuth } from './AuthProvider'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { Button } from '@/components/ui/button'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function TaskManager() {
  const { user } = useAuth()

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome, {user?.email}</h2>
        <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
      </div>
      <AddTaskForm />
      <TaskList />
    </div>
  )
}

