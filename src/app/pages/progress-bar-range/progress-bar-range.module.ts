import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarRangePageRoutingModule } from './progress-bar-range-routing.module';

import { ProgressBarRangePage } from './progress-bar-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarRangePageRoutingModule
  ],
  declarations: [ProgressBarRangePage]
})
export class ProgressBarRangePageModule {}
