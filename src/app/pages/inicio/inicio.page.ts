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
    }
    ,
    {
      icon: 'beaker',
      name: 'avatar',
      redirecTo: '/avatar'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}