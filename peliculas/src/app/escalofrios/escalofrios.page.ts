import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-escalofrios',
  templateUrl: './escalofrios.page.html',
  styleUrls: ['./escalofrios.page.scss'],
})
export class EscalofriosPage implements OnInit {

  constructor(public navctrl: NavController) { }

  atras() {
    this.navctrl.navigateForward("ficcion");
  }

  ngOnInit() {
  }

}
