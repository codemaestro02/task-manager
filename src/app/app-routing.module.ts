import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TaskFormComponent} from "./task-form/task-form.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'task-form', component: TaskFormComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
