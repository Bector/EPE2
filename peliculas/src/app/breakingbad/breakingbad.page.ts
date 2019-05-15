import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-breakingbad',
  templateUrl: './breakingbad.page.html',
  styleUrls: ['./breakingbad.page.scss'],
})
export class BreakingbadPage implements OnInit {

  constructor(public navctrl : NavController){}

  atras(){
    this.navctrl.navigateForward("/tabs/tab3");
  }

  ngOnInit() {
  }

}
