import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { NavfunctionService } from './navfunction.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DirectionsComponent } from './directions/directions.component';
import { Directions2Component } from './directions2/directions2.component';
import { Article1Component } from './services/articles/article1/article1.component';
import { Article2Component } from './services/articles/article2/article2.component';
import { Article3Component } from './services/articles/article3/article3.component';
import { Article4Component } from './services/articles/article4/article4.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    DirectionsComponent,
    Directions2Component,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
    AngularFireDatabaseModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),  // Firebase database modul    
  ],
  providers: [NavfunctionService],
  bootstrap: [AppComponent],
  entryComponents: [DirectionsComponent, Directions2Component]
})
export class AppModule { }
