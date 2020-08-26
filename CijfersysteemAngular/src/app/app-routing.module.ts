import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LeerlingTabelComponent } from './components/leerlingtabel/leerlingtabel.component';

const routes: Routes = [
  {path: "", component: HomepageComponent, pathMatch: "full"},
  {path: 'leerlingen', component: LeerlingTabelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
