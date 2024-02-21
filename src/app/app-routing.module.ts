import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './comps/add-student/add-student.component';
import { EditStudentComponent } from './comps/edit-student/edit-student.component';
import { LoginStudentComponent } from './comps/login-student/login-student.component';
import { RegistrationStudentComponent } from './comps/registration-student/registration-student.component';
import { ListStudentComponent } from './comps/list-student/list-student.component';

const routes: Routes = [
  {path: 'add',
  component:AddStudentComponent
  },
  {path: 'login',
  component:LoginStudentComponent
  },
  {path: 'edit',
  component:EditStudentComponent
  },
  {path: 'register',
  component:RegistrationStudentComponent
  },
  {path: 'list',
  component:ListStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
