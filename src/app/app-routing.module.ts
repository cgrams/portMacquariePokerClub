import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

import { Article1Component } from './services/articles/article1/article1.component';
import { Article2Component } from './services/articles/article2/article2.component';
import { Article3Component } from './services/articles/article3/article3.component';
import { Article4Component } from './services/articles/article4/article4.component';
import { Article5Component } from './services/articles/article5/article5.component';
import { Article6Component } from './services/articles/article6/article6.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  { path:'sideArchive', component: Article6Component, children:[
        {path: '', component: ServicesComponent },
        {path: 'april-12', component: Article6Component}    
      ]
  },
 
  { path:'sideArchive', component: Article1Component, children:[
        {path: '', component: ServicesComponent },
        {path: 'march-12', component: Article1Component}    
      ]
  },
   { path:'sideArchive', component: Article5Component, children:[
        {path: '', component: ServicesComponent },
        {path: 'april-5', component: Article5Component}        
      ]
  },  

   { path:'sideArchive', component: Article2Component, children:[
        {path: '', component: ServicesComponent },
        {path: 'march-5', component: Article2Component}        
      ]
  },  

   { path:'sideArchive', component: Article3Component, children:[
        {path: '', component: ServicesComponent },
        {path: 'feb-25', component: Article3Component}        
      ]
  },

   { path:'sideArchive', component: Article4Component, children:[
        {path: '', component: ServicesComponent },
        {path: 'feb-18', component: Article4Component}        
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
