import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-monja',
  templateUrl: './monja.page.html',
  styleUrls: ['./monja.page.scss'],
})
export class MonjaPage implements OnInit {

  constructor(public navctrl : NavController) { }
  atras(){
    this.navctrl.navigateForward("terror");
  }
  ngOnInit() {
  }

}
