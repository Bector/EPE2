import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-bird',
  templateUrl: './bird.page.html',
  styleUrls: ['./bird.page.scss'],
})
export class BirdPage implements OnInit {

  constructor(public navctrl : NavController) { }

  atras(){
    this.navctrl.navigateForward("otros");
  }

  ngOnInit() {
  }

}
