import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-the100',
  templateUrl: './the100.page.html',
  styleUrls: ['./the100.page.scss'],
})
export class The100Page implements OnInit {

  constructor(public navctrl : NavController){}

  atras(){
    this.navctrl.navigateForward("/tabs/tab3");
  }

  ngOnInit() {
  }

}
