import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import {SecondRouteComponent} from '../second-route/second-route.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<SecondRouteComponent> {
  canDeactivate(component: SecondRouteComponent) {
    const canDeactivate = component.canDeactivate();
    if (!canDeactivate) {
      alert('Sure?');
      return false;
    }

    return true;
  }
}
