'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash2, Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Badge } from '@/components/ui/badge'

interface Task {
  id: string
  name: string
  completed: boolean
  category?: string
  dueDate?: string
}

export default function TaskItem({ task, setTasks }: { task: Task; setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) {
  const handleToggle = async () => {
    await updateDoc(doc(db, 'tasks', task.id), {
      completed: !task.completed
    })
    setTasks(prevTasks => 
      prevTasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t)
    )
  }

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'tasks', task.id))
    setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id))
  }

  return (
    <li className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all hover:shadow-md">
      <div className="flex items-center space-x-3">
        <Checkbox checked={task.completed} onCheckedChange={handleToggle} />
        <div>
          <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.name}
          </span>
          {task.category && (
            <Badge variant="secondary" className="ml-2">
              {task.category}
            </Badge>
          )}
          {task.dueDate && (
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(task.dueDate), 'PPP')}
            </div>
          )}
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={handleDelete}>
        <Trash2 className="h-5 w-5 text-red-500" />
      </Button>
    </li>
  )
}

