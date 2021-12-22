import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComComponent } from './a-com/a-com.component';
import { BComComponent } from './b-com/b-com.component';

@NgModule({
  declarations: [AppComponent, AComComponent, BComComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
