import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public actionSheetController: ActionSheetController) { }

  toggleValue: boolean=false;
  toggleValue2: boolean=false;

  async HojaDeAccion() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Redes Sociales',
      buttons: [{
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          window.open("https://www.facebook.com");
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          window.open("https://www.twitter.com");
        }
      }, {
        text: 'Instagram',
        icon: 'logo-instagram',
        handler: () => {
          window.open("https://www.instagram.com");
        }
      }]
    });
    await actionSheet.present();
  }


}