import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewLeerlingenPageComponent } from './view-leerlingen-page/view-leerlingen-page.component';
import { ViewVakkenPageComponent } from './view-vakken-page/view-vakken-page.component';
import { ViewDocentenPageComponent } from './view-docenten-page/view-docenten-page.component';
import { ViewDocentVakPageComponent} from './view-docent-vak-page/view-docent-vak-page.component';

const routes: Routes = [
  {path: "", component: HomepageComponent, pathMatch: "full"},
  {path: 'leerlingen', component: ViewLeerlingenPageComponent},
  {path: 'vakken', component: ViewVakkenPageComponent}
  {path: 'docenten', component: ViewDocentenPageComponent},
  {path: 'docent/:id', component: ViewDocentVakPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
