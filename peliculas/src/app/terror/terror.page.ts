import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.page.html',
  styleUrls: ['./terror.page.scss'],
})
export class TerrorPage implements OnInit {

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }
  atras(){

    this.navctrl.navigateForward("tabs/tab2");

  }
  monja(){
    this.navctrl.navigateForward("monja");
  }
  silencio(){
    this.navctrl.navigateForward("silencio");
  }
  ouija(){
    this.navctrl.navigateForward("ouija");
  }
  conjuro(){
    this.navctrl.navigateForward("conjuro");
  }

  ngOnInit() {
  }

}
