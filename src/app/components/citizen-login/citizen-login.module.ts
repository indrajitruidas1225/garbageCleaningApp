import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenLoginPageRoutingModule } from './citizen-login-routing.module';

import { CitizenLoginPage } from './citizen-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenLoginPageRoutingModule
  ],
  declarations: [CitizenLoginPage]
})
export class CitizenLoginPageModule {}
