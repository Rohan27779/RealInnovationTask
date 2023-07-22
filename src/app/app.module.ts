import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomModule } from './custom/custom.module';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';
import { AddDetailsComponent } from './employee/add-details/add-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
// import { CustomDatePickerPanelComponent } from '../app/employee/custom-date-picker-panel/custom-date-picker-panel.component';

@NgModule({
  // entryComponents: [CustomDatePickerPanelComponent],
  declarations: [
    AppComponent,
    AddDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomModule,
    SharedModule,
    EmployeeModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
