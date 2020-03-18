import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log('change', event);
    console.log('change', new Date(event.detail.value));
  }
}
