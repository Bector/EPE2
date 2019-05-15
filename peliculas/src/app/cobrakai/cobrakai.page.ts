import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-cobrakai',
  templateUrl: './cobrakai.page.html',
  styleUrls: ['./cobrakai.page.scss'],
})
export class CobrakaiPage implements OnInit {

  constructor(public navctrl : NavController){}

  atras(){
    this.navctrl.navigateForward("/tabs/tab3");
  }

  ngOnInit() {
  }

}
