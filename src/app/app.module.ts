import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './comps/add-student/add-student.component';
import { EditStudentComponent } from './comps/edit-student/edit-student.component';
import { ListStudentComponent } from './comps/list-student/list-student.component';
import { LoginStudentComponent } from './comps/login-student/login-student.component';
import { RegistrationStudentComponent } from './comps/registration-student/registration-student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    LoginStudentComponent,
    RegistrationStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
