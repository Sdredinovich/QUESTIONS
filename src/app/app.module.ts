import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent ],
  imports: [CommonModule, MatExpansionModule, RouterModule, BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
  providers: [
],
})
export class AppModule {
}
