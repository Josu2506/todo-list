import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './Task';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class TaskComponent {
  tasks: Task[] = [];
  taskTitle: string = '';
  nextId: number = 1;

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask: Task = {
        id: this.nextId++,
        title: this.taskTitle,
        completed: false,
        visible: false,
      };
      this.tasks.push(newTask);
      this.taskTitle = '';

      setTimeout(() => {
        newTask.visible = true;
      }, 100);
    }
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.visible = false;
      setTimeout(() => {
        this.tasks = this.tasks.filter((t) => t.id !== taskId);
      }, 300);
    }
  }
}
