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
import { ViewLeerlingenPageComponent } from './view-leerlingen-page/view-leerlingen-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LeerlingTabelComponent,
    ViewLeerlingenPageComponent
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
