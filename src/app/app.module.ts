import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { IconsComponent } from './components/icons/icons.component';
import { TakeNotesComponent } from './components/take-notes/take-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthService } from './services/authservice/auth.service';
import { EditdialogComponent } from './components/editdialog/editdialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { NotesFilterPipe } from './notes-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    IconsComponent,
    TakeNotesComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    EditdialogComponent,
    ArchiveNotesComponent,
    TrashNotesComponent,
    NotesFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,FlexLayoutModule,
    ReactiveFormsModule,AppRoutingModule,FormsModule,MatCardModule,BrowserAnimationsModule,HttpClientModule,MatToolbarModule,
    MatSidenavModule,MatIconModule,MatDividerModule,MatListModule,MatMenuModule,MatExpansionModule,MatDialogModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
