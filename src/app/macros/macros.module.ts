import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { MacrosRoutingModule } from './macros-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacrosHomeComponent } from './macros-home/macros-home.component';

@NgModule({
  imports: [
    CommonModule,
    MacrosRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [MacrosHomeComponent]
})
export class MacrosModule { }
