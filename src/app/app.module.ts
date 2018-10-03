import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TransformIotsToDotComponent } from './transform-iots-to-dot/transform-iots-to-dot.component';
import { TransformDotToIotsComponent } from './transform-dot-to-iots/transform-dot-to-iots.component';
import { GenerateAutomataFromDotComponent } from './generate-automata-from-dot/generate-automata-from-dot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TransformIotsToDotComponent,
    TransformDotToIotsComponent,
    GenerateAutomataFromDotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
