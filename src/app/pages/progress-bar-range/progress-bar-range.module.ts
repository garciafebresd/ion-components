import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarRangePageRoutingModule } from './progress-bar-range-routing.module';

import { ProgressBarRangePage } from './progress-bar-range.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarRangePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgressBarRangePage]
})
export class ProgressBarRangePageModule {}
