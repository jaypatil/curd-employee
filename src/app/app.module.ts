import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ObservableComponent }  from './observable.component';
import { PromiseComponent }  from './promise.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }