import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-range',
  templateUrl: './progress-bar-range.page.html',
  styleUrls: ['./progress-bar-range.page.scss'],
})
export class ProgressBarRangePage implements OnInit {

  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango( event ) {
    console.log(event);

    this.porcentaje = event.detail.value / 100;

  }

}
