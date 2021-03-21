import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { PlayerState } from './state/player.state';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([PlayerState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
