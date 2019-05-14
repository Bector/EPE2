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
  star(){

    this.navctrl.navigateForward('star');

  }
  ready(){
    this.navctrl.navigateForward('ready');
  }
  escalofrio(){
    this.navctrl.navigateForward('escalofrios');
  }
  harry(){
    this.navctrl.navigateForward('harry');
  }

  ngOnInit() {
  }

}
