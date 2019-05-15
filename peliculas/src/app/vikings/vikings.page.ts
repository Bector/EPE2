import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-vikings',
  templateUrl: './vikings.page.html',
  styleUrls: ['./vikings.page.scss'],
})
export class VikingsPage implements OnInit {

  constructor(public navctrl : NavController){}

  atras(){
    this.navctrl.navigateForward("/tabs/tab3");
  }

  ngOnInit() {
  }

}
