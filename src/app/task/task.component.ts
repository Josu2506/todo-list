import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './Task';
import { TaskService } from '../services/task-service.service';
import { taskAnimations } from '../animations/taskAnimation';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [FormsModule, CommonModule],
  animations: [taskAnimations],
})
export class TaskComponent {
  tasks: Task[] = [];
  taskTitle: string = '';
  errorMessage: string = '';
  showErrorMessage: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.taskTitle.trim() === '') {
      this.errorMessage = 'The task title is required.';
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
        this.errorMessage = '';
      }, 3000);
      return;
    }
    this.taskService.addTask(this.taskTitle);
    this.taskTitle = '';
    this.errorMessage = '';
    this.showErrorMessage = false;
  }

  trackTaskById(index: number, task: Task) {
    return task.id;
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
    if (task.completed) {
      this.deleteTask(task.id);
    }
  }

  deleteTask(taskId: number) {
    const index = this.tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
