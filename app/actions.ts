'use server'

import { revalidatePath } from 'next/cache'

interface Task {
  id: string
  name: string
  completed: boolean
}

let tasks: Task[] = []

export async function addTask(name: string) {
  const newTask: Task = {
    id: Date.now().toString(),
    name,
    completed: false,
  }
  tasks.push(newTask)
  revalidatePath('/')
}

export async function getTasks() {
  return tasks
}

export async function toggleTask(id: string) {
  const task = tasks.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
  }
  revalidatePath('/')
}

export async function deleteTask(id: string) {
  tasks = tasks.filter(t => t.id !== id)
  revalidatePath('/')
}

