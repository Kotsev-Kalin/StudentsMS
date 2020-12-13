import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import {LoginComponent} from "./components/login/login.component";
import {BasicAuthInterceptor} from "./helpers/basic-auth.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import {CreateUserComponent} from "./components/create-user/create-user.component";


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    CreateUserComponent,
    StudentListComponent,
    UpdateStudentComponent,
    UploadFilesComponent,
    LoginComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
