import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LuckyNumberComponent } from './lucky-number/lucky-number.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LuckyNumberComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
