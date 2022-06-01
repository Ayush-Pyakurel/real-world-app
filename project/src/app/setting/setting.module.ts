import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

console.log('setting load first')
@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }
