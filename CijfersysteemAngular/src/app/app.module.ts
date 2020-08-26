import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeerlingTabelComponent } from './components/leerlingtabel/leerlingtabel.component';
import { HttpClientModule} from '@angular/common/http';
import { ViewLeerlingenPageComponent } from './view-leerlingen-page/view-leerlingen-page.component';
import { VaktabelComponent } from './components/vaktabel/vaktabel.component';
import { ViewVakkenPageComponent } from './view-vakken-page/view-vakken-page.component'
import { DocenttabelComponent } from './components/docenttabel/docenttabel.component';
import { ViewDocentenPageComponent } from './view-docenten-page/view-docenten-page.component';
import { ViewDocentVakPageComponent } from './view-docent-vak-page/view-docent-vak-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LeerlingTabelComponent,
    ViewLeerlingenPageComponent,
    VaktabelComponent,
    ViewVakkenPageComponent
    DocenttabelComponent,
    ViewDocentenPageComponent,
    ViewDocentVakPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
