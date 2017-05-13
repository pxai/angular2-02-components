import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MyTitleComponent} from './mytitle.component';
import {MyExternalComponent} from './myexternal.component';
import {SpecialButtonComponent} from "./app.button";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  MyTitleComponent,
                  MyExternalComponent,
                  SpecialButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
