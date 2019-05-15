import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BreakingbadPage } from './breakingbad.page';

const routes: Routes = [
  {
    path: '',
    component: BreakingbadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BreakingbadPage]
})
export class BreakingbadPageModule {}
