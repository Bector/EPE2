import { Component, OnInit, ViewChild } from '@angular/core';
import {NavController} from '@ionic/angular';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {
  @ViewChild(IonContent) content:IonContent;

  constructor(public navctrl : NavController){}

  home(){

    this.navctrl.navigateForward("tabs");

  }
  Avengers(){

    this.navctrl.navigateForward('avengers');

  }
  hormiga(){
    this.navctrl.navigateForward('hormiga');
  }
  pantera(){
    this.navctrl.navigateForward('pantera');
  }
  thor(){
    this.navctrl.navigateForward('thor');
  }
  dbs(){
    this.navctrl.navigateForward('dbs');
  }
  kingsman(){
    this.navctrl.navigateForward('kingsman');
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
