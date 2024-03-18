import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from'@angular/material/button'
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    RouterLink

  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
