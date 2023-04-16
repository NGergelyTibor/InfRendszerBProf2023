import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MrIQComponent } from './mr-iq/mr-iq.component';
import { MsUniverseComponent } from './ms-universe/ms-universe.component';
import { BombastoComponent } from './bombasto/bombasto.component';
import { VoteResultComponent } from './vote-result/vote-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MrIQComponent,
    MsUniverseComponent,
    BombastoComponent,
    VoteResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
