import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { heroesModule } from './heroes/components/heroes.module';
import { counterModule } from './counter/components/counter.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroesModule,
    counterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
