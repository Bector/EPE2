import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit {
  @ViewChild(IonContent) content:IonContent;

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }
  atras(){

    this.navctrl.navigateForward("tabs/tab2");

  }

  bird(){

    this.navctrl.navigateForward('bird');

  }
  me(){
    this.navctrl.navigateForward('me');
  }
  roma(){
    this.navctrl.navigateForward('roma');
  }
  titanic(){
    this.navctrl.navigateForward('titanic');
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
