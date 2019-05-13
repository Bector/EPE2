import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public navctrl : NavController){}

  click(){

    this.navctrl.navigateForward("accion");

  }
  click1(){

    this.navctrl.navigateForward("terror");

  }
  click2(){

    this.navctrl.navigateForward("ficcion");

  }
  click3(){

    this.navctrl.navigateForward("otros");

  }
}



