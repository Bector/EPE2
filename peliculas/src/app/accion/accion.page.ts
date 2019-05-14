import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }
  Avengers(){

    this.navctrl.navigateForward('avengers');

  }
  hormiga(){
    this.navctrl.navigateForward('hormiga');
  }
  pantera(){
    this.navctrl.navigateForward('pantera');
  }
  thor(){
    this.navctrl.navigateForward('thor');
  }
  dbs(){
    this.navctrl.navigateForward('dbs');
  }
  kingsman(){
    this.navctrl.navigateForward('kingsman');
  }



  ngOnInit() {

  }
    

}
