import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CounterService } from './shared/services/counter.service';
import { PublicComponentsModule } from './public-components/public-components.module';


@NgModule({
  declarations: [
    AppComponent, SidenavComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

    PublicComponentsModule

  ],
  providers: [
    CounterService,
    { provide: 'token', useValue: 'xjkhkdhfkksxjjkskjdfjsjslajdfljlasjdf' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
