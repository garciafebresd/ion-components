import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente } from '../../interfaces/componente.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }

}
