import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Component[] = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Component {
  icon: string;
  name: string;
  redirecTo: string;
}
