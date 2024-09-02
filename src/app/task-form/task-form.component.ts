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
      description: ['', [Validators.maxLength(15), Validators.required]],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value['title'], this.taskForm.value['description']);
      this.router.navigate(['/dashboard']);
      this.taskForm.reset();
    }
  }

  // hasError(controlName: string, errorName: string){
  //   if (this.taskForm.value['description'].length > 0){
  //     return this.taskForm.controls[controlName].hasError(errorName);
  //   }
  //   return false;
  // }
  //
  // getErrorMessage(controlName: string): string {
  //   return this.taskForm.controls[controlName].hasError("max") ? "Character Limit is 15!" : ''
  // }
}
