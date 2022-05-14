import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './componenets/employee.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
