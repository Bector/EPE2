import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ouija',
  templateUrl: './ouija.page.html',
  styleUrls: ['./ouija.page.scss'],
})
export class OuijaPage implements OnInit {

  constructor(public navctrl : NavController){ }
  atras(){
    this.navctrl.navigateForward("terror");
  }

  ngOnInit() {
  }

}
