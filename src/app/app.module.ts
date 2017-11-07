import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBarComponent } from './containers/top-bar/top-bar.component';
import { LeftBarComponent } from './containers/left-bar/left-bar.component';
import { CenterAreaComponent } from './containers/center-area/center-area.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    CenterAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
