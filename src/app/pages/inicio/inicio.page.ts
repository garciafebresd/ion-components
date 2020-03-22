import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/componente.interface';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Observable<Componente[]>;

  constructor(private menuController: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}
