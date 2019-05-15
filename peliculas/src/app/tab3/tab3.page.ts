import { Component, ViewChild } from '@angular/core';
import {NavController} from '@ionic/angular';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonContent) content:IonContent;

  constructor(public navctrl : NavController){}

  sherlock(){

    this.navctrl.navigateForward("sherlock");

  }
  got(){
    this.navctrl.navigateForward("got");
  }
  mrrobot(){
    this.navctrl.navigateForward("mrrobot");
  }
  cobrakai(){
    this.navctrl.navigateForward("cobrakai");
  }
  the100(){
    this.navctrl.navigateForward("the100");
  }
  breakingbad(){
    this.navctrl.navigateForward("breakingbad");
  }
  house(){
    this.navctrl.navigateForward("house");
  }
  vikings(){
    this.navctrl.navigateForward("vikings");
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
}

