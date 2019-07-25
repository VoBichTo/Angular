import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Screen1Component } from './screen1/page1/screen1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Screen2Component } from './screen2/page2/screen2.component';


const routes: Routes = [
  { path: 'page1', component: Screen1Component},
  { path: 'page2', component: Screen2Component},
  { path: '',   redirectTo: '/page1', pathMatch: 'full' },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
