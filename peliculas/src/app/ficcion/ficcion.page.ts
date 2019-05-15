import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-ficcion',
  templateUrl: './ficcion.page.html',
  styleUrls: ['./ficcion.page.scss'],
})
export class FiccionPage implements OnInit {
  @ViewChild(IonContent) content:IonContent;

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }
  atras(){

    this.navctrl.navigateForward("tabs/tab2");

  }
  star(){

    this.navctrl.navigateForward('star');

  }
  ready(){
    this.navctrl.navigateForward('ready');
  }
  escalofrio(){
    this.navctrl.navigateForward('escalofrios');
  }
  harry(){
    this.navctrl.navigateForward('harry');
  }
  logScrollStart(){
    console.log("logScrollStart : When Scroll Starts");
  }
 
  logScrolling(){
    console.log("logScrolling : When Scrolling");
  }
 
  logScrollEnd(){
    console.log("logScrollEnd : When Scroll Ends");
  }
 
  ScrollToBottom(){
    this.content.scrollToBottom(1500);
  }
 
  ScrollToTop(){
    this.content.scrollToTop(1500);
  }

  ngOnInit() {
  }

}
