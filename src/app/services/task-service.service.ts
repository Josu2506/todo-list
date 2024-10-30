import { Injectable } from '@angular/core';
import { Task } from '../task/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  addTask(taskTitle: string) {
    const newTask = {
      id: this.tasks.length + 1,
      title: taskTitle,
      completed: false
    };
    this.tasks.push(newTask);
  }

  deleteTask(taskId: number) {
    const index = this.tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this.tasks;
  }
}
