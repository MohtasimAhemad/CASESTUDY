import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewResultComponent } from './admin/add-new-result/add-new-result.component';
import { AddNewStudentComponent } from './admin/add-new-student/add-new-student.component';
import { AdminComponent } from './admin/admin.component';
import { AllResultComponent } from './admin/all-result/all-result.component';
import { RegisteredStudentComponent } from './admin/registered-student/registered-student.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path :'student', component:StudentComponent},
  {path:'admin',component:AdminComponent},
  {path:'registered-student',component:RegisteredStudentComponent},
  {path:'add-new-student',component:AddNewStudentComponent},
  {path:'add-new-result',component:AddNewResultComponent},
  {path:'all-result',component:AllResultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
