import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenLoginPage } from './citizen-login.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenLoginPageRoutingModule {}
