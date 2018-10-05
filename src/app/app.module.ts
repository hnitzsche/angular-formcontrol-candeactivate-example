import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import {FormGuard} from './_guards/form.guard';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'first-route', component: FirstRouteComponent },
  { path: 'second-route', component: SecondRouteComponent, canDeactivate: [FormGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstRouteComponent,
    SecondRouteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
