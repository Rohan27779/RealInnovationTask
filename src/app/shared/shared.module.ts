import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CustomModule } from '../custom/custom.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomModule
  ],
  exports:[HeaderComponent],

})
export class SharedModule { }
