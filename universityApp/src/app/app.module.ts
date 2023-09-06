import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisteredStudentComponent } from './admin/registered-student/registered-student.component';
import { AddNewStudentComponent } from './admin/add-new-student/add-new-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewResultComponent } from './admin/add-new-result/add-new-result.component';
import { AllResultComponent } from './admin/all-result/all-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    AdminComponent,
    RegisteredStudentComponent,
    AddNewStudentComponent,
    AddNewResultComponent,
    AllResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
