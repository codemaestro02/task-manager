import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule} from "@angular/forms";
import { NgxSemanticModule } from 'ngx-semantic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
