import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewLeerlingenPageComponent } from './view-leerlingen-page/view-leerlingen-page.component';
import { ViewVakkenPageComponent } from './view-vakken-page/view-vakken-page.component';

const routes: Routes = [
  {path: "", component: HomepageComponent, pathMatch: "full"},
  {path: 'leerlingen', component: ViewLeerlingenPageComponent},
  {path: 'vakken', component: ViewVakkenPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
