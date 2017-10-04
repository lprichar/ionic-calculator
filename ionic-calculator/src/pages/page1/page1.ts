import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  constructor(public navCtrl: NavController) {
    this.display = "0";
  }

  public display: string;

  onLink(url: string) {
    window.open(url);
  }
}
