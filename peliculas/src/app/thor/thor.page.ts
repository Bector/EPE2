import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-thor',
  templateUrl: './thor.page.html',
  styleUrls: ['./thor.page.scss'],
})
export class ThorPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  atras() {
    this.navCtrl.navigateForward('accion');
  }

  ngOnInit() {
  }

}
