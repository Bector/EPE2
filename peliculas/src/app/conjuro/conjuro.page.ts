import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conjuro',
  templateUrl: './conjuro.page.html',
  styleUrls: ['./conjuro.page.scss'],
})
export class ConjuroPage implements OnInit {

  constructor(public navctrl : NavController) { }
  atras(){
    this.navctrl.navigateForward("terror");
  }
  ngOnInit() {
  }

}
