import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-star',
  templateUrl: './star.page.html',
  styleUrls: ['./star.page.scss'],
})
export class StarPage implements OnInit {

  constructor(public navctrl: NavController) { }
  atras() {
    this.navctrl.navigateForward("ficcion");
  }

  ngOnInit() {
  }

}
