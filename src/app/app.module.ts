import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './doctor/projects.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { DepartmentComponent } from './department/department.component';
import { SubscribeBannerComponent } from './subscribe-banner/subscribe-banner.component';
import { NewsComponent } from './news/news.component';
import { SliderComponent } from './slider/slider.component';
import { AppointmentComponent } from './appointment/appointment.component';
 const appRoutes:Routes =
 [
   {path:'home',component:HomeComponent},
   {path:'', redirectTo:'/home' , pathMatch:'full'},
   {path:'about',component:AboutComponent},
   {path:'projects',component:ProjectsComponent},
   {path:'department',component:DepartmentComponent},
   {path:'contacts',component:ContactsComponent},
   {path:'**',component:NotfoundComponent}
 ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent,
    ProjectsComponent,
    NotfoundComponent,
    AboutComponent,
    DepartmentComponent,
    SubscribeBannerComponent,
    NewsComponent,
    SliderComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
