import { TodoListComponent, TodoComponent } from './ui-elements/todo/index';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routes } from './routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from "app/services/data.service";
import { HomeComponent } from "app/pages/home";
import { SearchComponent } from "app/pages/search";
import { AlertModule, AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
