import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationVerticalComponent } from './components/navigation-vertical/navigation-vertical.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { CooperativaFormComponent } from './components/cooperativa-form/cooperativa-form.component';
import { CooperativaListComponent } from './components/cooperativa-list/cooperativa-list.component';

import { CooperativasService} from './services/cooperativas.service';
import { InicioComponent } from './components/inicio/inicio.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationVerticalComponent,
    FooterComponent,
    MenuVerticalComponent,
    CooperativaFormComponent,
    CooperativaListComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CooperativasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
