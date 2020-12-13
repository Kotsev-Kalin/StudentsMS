import { CreateStudentComponent } from './components/create-student/create-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import {UploadFilesComponent} from "./components/upload-files/upload-files.component";

import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./helpers/auth.guard";
import {CreateUserComponent} from "./components/create-user/create-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'create', component: CreateStudentComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateStudentComponent, canActivate: [AuthGuard]  },
  { path: 'upload', component: UploadFilesComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'login/register', component: CreateUserComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
