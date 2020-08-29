import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewLeerlingenPageComponent } from './view-leerlingen-page/view-leerlingen-page.component';
import { ViewKlassenPageComponent } from './view-klassen-page/view-klassen-page.component'
import { ViewVakkenPageComponent } from './view-vakken-page/view-vakken-page.component';
import { ViewDocentenPageComponent } from './view-docenten-page/view-docenten-page.component';
import { ViewDocentVakPageComponent} from './view-docent-vak-page/view-docent-vak-page.component';
import { ViewLeerlingenVanKlasPageComponent } from './view-leerlingen-van-klas-page/view-leerlingen-van-klas-page.component';
import { ViewToetsenPageComponent } from './view-toetsen-page/view-toetsen-page.component';
import { ViewToetsenVanVakPageComponent } from './view-toetsen-van-vak-page/view-toetsen-van-vak-page.component';
import { ViewCijfersDocentPageComponent } from './view-cijfers-docent-page/view-cijfers-docent-page.component';
import { ViewKlasVakkenPageComponent } from './view-klas-vakken-page/view-klas-vakken-page.component';
import { ViewKlasToetsenPageComponent } from './view-klas-toetsen-page/view-klas-toetsen-page.component';

const routes: Routes = [
  {path: "", component: HomepageComponent, pathMatch: "full"},
  {path: 'leerlingen', component: ViewLeerlingenPageComponent},
  {path: 'klassen', component: ViewKlassenPageComponent},
  {path: 'vakken', component: ViewVakkenPageComponent},
  {path: 'docenten', component: ViewDocentenPageComponent},
  {path: 'docent/:id', component: ViewDocentVakPageComponent},
  {path: 'klas/:klasid/leerlingen' , component: ViewLeerlingenVanKlasPageComponent},
  {path: 'toetsen', component: ViewToetsenPageComponent},
  {path: 'toetsen/:vakid', component: ViewToetsenVanVakPageComponent},
  {path: 'cijfers/:docentid/:vakid/:klasid', component: ViewCijfersDocentPageComponent},
  {path: 'klas/:klasid/vakken', component: ViewKlasVakkenPageComponent},
  {path: 'klas/:klasid/toetsen', component: ViewKlasToetsenPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
