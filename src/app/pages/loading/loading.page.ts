import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {

    const messageLoading = 'Espere por favor';
    this.presentLoading(messageLoading);

    setTimeout(() => {
      this.loading.dismiss();
    }, 2500);
  }

  async presentLoading(messageLoading: string) {
    this.loading = await this.loadingController.create({
      message: messageLoading,
      //duration: 2000
    });
    return this.loading.present();
    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }
}
