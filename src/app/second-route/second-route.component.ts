import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.scss']
})
export class SecondRouteComponent {

  formSaved = false;
  inputText =  new FormControl('Initial value');

  constructor() {}

  canDeactivate() {
    if (this.inputText.dirty && this.formSaved) {
      return true;
    }
    if (this.inputText.dirty && !this.formSaved) {
      return false;
    }
    if (this.inputText.pristine) {
      return true;
    }
  }

  checkboxChanged(value) {
    this.formSaved = value;
  }

}
