import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VoteResultComponent } from './vote-result/vote-result.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteResultComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
