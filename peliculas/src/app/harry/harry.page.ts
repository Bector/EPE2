import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.page.html',
  styleUrls: ['./harry.page.scss'],
})
export class HarryPage implements OnInit {

  constructor(public navctrl: NavController) { }
  atras() {
    this.navctrl.navigateForward("ficcion");
  }
  ngOnInit() {
  }

}
