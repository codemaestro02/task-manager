import {Component, OnInit} from '@angular/core';
import {TaskService, Task} from "../task.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  newTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => {
      this.newTasks = tasks.filter(task => task.status === 'New');
      this.inProgressTasks = tasks.filter(task => task.status === 'In Progress');
      this.completedTasks = tasks.filter(task => task.status === 'Completed');
    })
  }

  // drop(event: CdkDragDrop<Task[], any>, status: 'New' | 'In Progress' | 'Completed') {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     const task = event.previousContainer.data[event.previousIndex];
  //     this.taskService.updateTaskStatus(task.taskId, status);
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

  // drop(event: CdkDragDrop<any[]>, listName: string) {
  //   if (event.previousContainer === event.container) {
  //     // Moving items within the same container
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     // Transferring items between containers
  //     // const task = event.previousContainer.data[event.previousIndex];
  //     // if (listName === "newTaskList") {
  //     //   task.status = "New";
  //     // } else if (listName === "inProgressList"){
  //     //   task.status = "In Progress";
  //     // } else if (listName === "completedList"){
  //     //   task.status = "Completed";
  //     // }
  //     // this.taskService.updateTaskStatus(task.taskId, task.status);
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

  drop(event: CdkDragDrop<Task[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    // this.taskService.updateTaskStatus(event.container.data[event.currentIndex].taskId,
    //   event.container.data[event.currentIndex].status);
  }
}
