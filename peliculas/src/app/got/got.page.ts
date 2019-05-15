import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-got',
  templateUrl: './got.page.html',
  styleUrls: ['./got.page.scss'],
})
export class GotPage implements OnInit {

  constructor(public navctrl : NavController){}

  atras(){
    this.navctrl.navigateForward("/tabs/tab3");
  }

  ngOnInit() {
  }

}
