import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwowayComponent } from './twoway/twoway.component';
import { Twoway2Component } from './twoway2/twoway2.component';

const routes: Routes = [
  { path: 'twoway', component: TwowayComponent },
  { path: 'twoway2', component: Twoway2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
