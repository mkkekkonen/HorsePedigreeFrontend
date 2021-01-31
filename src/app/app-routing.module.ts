import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HorseListComponent } from './horse-list/horse-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'horses', component: HorseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
