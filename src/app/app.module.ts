import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBar } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar/toolbar-module';

@NgModule({
  imports: [BrowserModule, FormsModule, MatToolbarModule],
  declarations: [AppComponent, HelloComponent, NavBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
