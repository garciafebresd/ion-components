import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarRangePage } from './progress-bar-range.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarRangePageRoutingModule {}
