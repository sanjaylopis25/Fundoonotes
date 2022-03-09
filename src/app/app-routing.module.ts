import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakeNotesComponent } from './components/take-notes/take-notes.component';
import { AuthGuard } from './authguard/auth.guard';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes',component:GetAllNotesComponent},
    { path: 'display',component:DisplayNotesComponent},
    { path: 'archive-notes',component:ArchiveNotesComponent},
    { path: 'trash-notes',component:TrashNotesComponent}
  ]},
  {path: 'resetpassword/:token',component: ResetComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
