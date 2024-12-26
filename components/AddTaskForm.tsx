'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useAuth } from './AuthProvider'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function AddTaskForm() {
  const [taskName, setTaskName] = useState('')
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState<Date>()
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (taskName.trim() && user) {
      const newTask = {
        name: taskName,
        category,
        dueDate: dueDate ? dueDate.toISOString() : null,
        completed: false,
        userId: user.uid,
      }
      await addDoc(collection(db, 'tasks'), newTask)
      setTaskName('')
      setCategory('')
      setDueDate(undefined)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <Input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a new task"
      />
      <Input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter task category"
      />
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dueDate ? format(dueDate, 'PPP') : <span>Pick a due date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  )
}

