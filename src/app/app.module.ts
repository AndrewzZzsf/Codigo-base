import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { heroesModule } from './heroes/components/heroes.module';
import { counterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroesModule,
    counterModule,
    DbzModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
