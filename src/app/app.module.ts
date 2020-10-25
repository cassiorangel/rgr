import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalDetailComponent } from './shared/modal-detail/modal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'informe-api-key-valida-para-teste'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
