import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TaskService} from '../task.service'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value['title'], this.taskForm.value['description']);
      this.router.navigate(['/dashboard']);
      this.taskForm.reset();
    }
  }

}
