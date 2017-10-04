import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public display: string;

  constructor(public navCtrl: NavController) {
    this.display = "0";
  }

  public onNumberClick(event) {
    let outerText = event.target.outerText;
    this.display = this.display + outerText;
  }

  onLink(url: string) {
    window.open(url);
  }
}
