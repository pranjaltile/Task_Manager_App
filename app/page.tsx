'use client'

import TaskManager from '@/components/TaskManager'
import AuthForm from '@/components/AuthForm'
import { useAuth } from '@/components/AuthProvider'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function Home() {
  const { user, error } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Task Manager</h1>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {user ? <TaskManager /> : <AuthForm />}
      </div>
    </div>
  )
}

