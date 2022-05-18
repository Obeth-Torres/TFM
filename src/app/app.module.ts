import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalistasComponent } from './analistas/analistas.component';
import { AnalistaDetailComponent } from './analista-detail/analista-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimationsComponent } from './animations/animations.component';
import { MycanvasComponent } from './mycanvas/mycanvas.component';
import { CoreAnimationDirective } from './directives/gsap/core-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnalistasComponent,
    AnalistaDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AnimationsComponent,
    MycanvasComponent,
    CoreAnimationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
