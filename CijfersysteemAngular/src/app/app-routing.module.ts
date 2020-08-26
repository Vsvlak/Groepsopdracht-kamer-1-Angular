import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LeerlingTabelComponent } from './components/leerlingtabel/leerlingtabel.component';
import { ViewLeerlingenPageComponent } from './view-leerlingen-page/view-leerlingen-page.component';

const routes: Routes = [
  {path: "", component: HomepageComponent, pathMatch: "full"},
  {path: 'leerlingen', component: ViewLeerlingenPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
