import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ficcion',
  templateUrl: './ficcion.page.html',
  styleUrls: ['./ficcion.page.scss'],
})
export class FiccionPage implements OnInit {

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }

  ngOnInit() {
  }

}
