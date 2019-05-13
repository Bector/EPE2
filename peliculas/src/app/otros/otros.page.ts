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

  ngOnInit() {
  }

}