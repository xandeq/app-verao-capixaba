import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4PageRoutingModule } from './Tab4-routing.module';
import { Tab4Page } from './tab4.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    Tab4PageRoutingModule,
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
