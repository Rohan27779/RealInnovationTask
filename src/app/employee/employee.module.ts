import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CustomModule } from 'src/app/custom/custom.module';
import { EditDetailsComponent } from './edit-details/edit-details.component';
// import { CustomDatePickerPanelComponent } from './custom-date-picker-panel/custom-date-picker-panel.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    EmployeeComponent,
    EditDetailsComponent,
    // CustomDatePickerPanelComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CustomModule,
    FormsModule,
    MatDatepickerModule
  ],
  exports: [
    EmployeeComponent
  ],

})
export class EmployeeModule { }
