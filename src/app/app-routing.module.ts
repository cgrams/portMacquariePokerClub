import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

import { Article1Component } from './services/articles/article1/article1.component'

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
 
  { path:'sideArchive', component: Article1Component, children:[
        {path: '', component: ServicesComponent },
        {path: 'march-12', component: Article1Component}
      ]
  },
   

 	{ path: 'join', component: AddStudentComponent },
 	{ path: 'view-students', component: StudentListComponent },
 	{ path: 'edit-student/:id', component: EditStudentComponent },

	{ path: '', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'contact', component: ContactComponent},
	{ path: 'blog', component: ServicesComponent},
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
