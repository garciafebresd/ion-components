import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  //basicamente sirve para manipular elementos del html
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {

    setTimeout(() => {

      if (this.data.length >= 60) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const newArray = Array(20);
      this.data.push(...newArray);
      event.target.complete();
    }, 1000);
  }
}
