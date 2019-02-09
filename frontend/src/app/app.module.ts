import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatButtonModule,MatIconModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatSelectModule  } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms'
import {IssueService} from './issue.service'

const routes : Routes = [
  {path :'create', component : CreateComponent},
  {path : 'edit/:id', component : EditComponent},
  {path : 'list', component : ListComponent},
  {path : '', redirectTo: 'list', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, 
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule 
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
