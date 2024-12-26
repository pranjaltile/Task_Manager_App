'use client'

import { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { useAuth } from './AuthProvider'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Task {
  id: string
  name: string
  completed: boolean
  category?: string
  dueDate?: string
}

export default function TaskList() {
  const { user } = useAuth()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'tasks'), where('userId', '==', user.uid))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task))
        setTasks(tasksData)
      })
      return () => unsubscribe()
    }
  }, [user])

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  )
}

