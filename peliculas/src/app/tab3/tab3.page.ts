import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public navctrl : NavController){}

  sherlock(){

    this.navctrl.navigateForward("sherlock");

  }
  got(){
    this.navctrl.navigateForward("got");
  }
  mrrobot(){
    this.navctrl.navigateForward("mrrobot");
  }
  cobrakai(){
    this.navctrl.navigateForward("cobrakai");
  }
  the100(){
    this.navctrl.navigateForward("the100");
  }
  breakingbad(){
    this.navctrl.navigateForward("breakingbad");
  }
  house(){
    this.navctrl.navigateForward("house");
  }
  vikings(){
    this.navctrl.navigateForward("vikings");
  }
}

