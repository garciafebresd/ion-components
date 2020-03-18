import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/componente.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Componente[] = [
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirecTo: '/alert'
    },
    {
      icon: 'american-football',
      name: 'action sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'beaker',
      name: 'avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-outline',
      name: 'botones y router',
      redirecTo: '/button'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkbox',
      redirecTo: '/checkbox'
    },
    {
      icon: 'calendar',
      name: 'Datetime',
      redirecTo: '/datetime'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}