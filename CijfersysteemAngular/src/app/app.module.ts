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
import { KlastabelComponent } from './components/klastabel/klastabel.component';
import { ViewKlassenPageComponent } from './view-klassen-page/view-klassen-page.component';
import { VaktabelComponent } from './components/vaktabel/vaktabel.component';
import { ViewVakkenPageComponent } from './view-vakken-page/view-vakken-page.component'
import { DocenttabelComponent } from './components/docenttabel/docenttabel.component';
import { ViewDocentenPageComponent } from './view-docenten-page/view-docenten-page.component';
import { ViewDocentVakPageComponent } from './view-docent-vak-page/view-docent-vak-page.component';
import { KlasleerlingtabelComponent } from './components/klasleerlingtabel/klasleerlingtabel.component';
import { ViewLeerlingenVanKlasPageComponent } from './view-leerlingen-van-klas-page/view-leerlingen-van-klas-page.component';
import { ToetsTabelComponent } from './components/toets-tabel/toets-tabel.component';
import { ViewToetsenPageComponent } from './view-toetsen-page/view-toetsen-page.component';
import { ViewToetsenVanVakPageComponent } from './view-toetsen-van-vak-page/view-toetsen-van-vak-page.component';
import { ToetsVanVakTabelComponent } from './components/toets-van-vak-tabel/toets-van-vak-tabel.component';
import { DocentCijferTabelComponent } from './components/docent-cijfer-tabel/docent-cijfer-tabel.component';
import { ViewCijfersDocentPageComponent } from './view-cijfers-docent-page/view-cijfers-docent-page.component';
import { KlasVakkenTabelComponent } from './components/klas-vakken-tabel/klas-vakken-tabel.component';
import { ViewKlasVakkenPageComponent } from './view-klas-vakken-page/view-klas-vakken-page.component';
import { KlasToetsenTabelComponent } from './components/klas-toetsen-tabel/klas-toetsen-tabel.component';
import { ViewKlasToetsenPageComponent } from './view-klas-toetsen-page/view-klas-toetsen-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LeerlingTabelComponent,
    ViewLeerlingenPageComponent,
    KlastabelComponent,
    ViewKlassenPageComponent,
    VaktabelComponent,
    ViewVakkenPageComponent,
    DocenttabelComponent,
    ViewDocentenPageComponent,
    ViewDocentVakPageComponent,
    KlasleerlingtabelComponent,
    ViewLeerlingenVanKlasPageComponent,
    ToetsTabelComponent,
    ViewToetsenPageComponent,
    ViewToetsenVanVakPageComponent,
    ToetsVanVakTabelComponent,
    DocentCijferTabelComponent,
    ViewCijfersDocentPageComponent,
    KlasVakkenTabelComponent,
    ViewKlasVakkenPageComponent,
    KlasToetsenTabelComponent,
    ViewKlasToetsenPageComponent
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
