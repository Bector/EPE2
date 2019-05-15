import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mrrobot',
  templateUrl: './mrrobot.page.html',
  styleUrls: ['./mrrobot.page.scss'],
})
export class MrrobotPage implements OnInit {

  constructor(public navctrl : NavController){}

  atras(){
    this.navctrl.navigateForward("/tabs/tab3");
  }

  ngOnInit() {
  }

}
