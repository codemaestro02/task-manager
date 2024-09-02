import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export interface Task {
  taskId: number;
  title: string;
  description: string;
  status: 'New' | 'In Progress' | 'Completed';
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private toastr: ToastrService) { }

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }

  addTask(title: string, description: string): void {
    const taskId = this.getTasks().length
    const newTask: Task = { taskId: taskId, title, description, status: 'New' };
    const currentTasks = this.getTasks();
    currentTasks.push(newTask);
    this.tasksSubject.next(currentTasks);
    this.toastr.success('Task added successfully!', 'Success');

    // Simulate API call to save the task
    setTimeout(() => {
      this.tasksSubject.next(currentTasks);
    }, 1000);
  }

  updateTaskStatus(taskId: number, newStatus: 'New' | 'In Progress' | 'Completed'): void {
    const currentTasks = this.getTasks();
    const updatedTasks = currentTasks.map(task =>
      task.taskId === taskId? {...task, status: newStatus} : task
    );
    this.tasksSubject.next(updatedTasks);
    this.toastr.info(`Task moved to ${newStatus}.`, 'Task Updated');

    // Simulate API call to update the task status
    setTimeout(() => {
      this.tasksSubject.next(updatedTasks);
    }, 1000);
  }
}
