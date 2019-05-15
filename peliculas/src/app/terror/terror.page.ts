import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.page.html',
  styleUrls: ['./terror.page.scss'],
})
export class TerrorPage implements OnInit {
  @ViewChild(IonContent) content:IonContent;

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }
  monja(){
    this.navctrl.navigateForward("monja");
  }
  silencio(){
    this.navctrl.navigateForward("silencio");
  }
  ouija(){
    this.navctrl.navigateForward("ouija");
  }
  conjuro(){
    this.navctrl.navigateForward("conjuro");
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
