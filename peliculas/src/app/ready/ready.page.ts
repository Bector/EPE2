import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.page.html',
  styleUrls: ['./ready.page.scss'],
})
export class ReadyPage implements OnInit {

  constructor(public navctrl: NavController) { }
  atras() {
    this.navctrl.navigateForward("ficcion");
  }
  ngOnInit() {
  }

}
