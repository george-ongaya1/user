import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2OrderPipe } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2OrderPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
