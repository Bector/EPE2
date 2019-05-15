import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit {

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }
  atras(){

    this.navctrl.navigateForward("tabs/tab2");

  }

  bird(){

    this.navctrl.navigateForward('bird');

  }
  me(){
    this.navctrl.navigateForward('me');
  }
  roma(){
    this.navctrl.navigateForward('roma');
  }
  titanic(){
    this.navctrl.navigateForward('titanic');
  }

  ngOnInit() {
  }

}
