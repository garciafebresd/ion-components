import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentInput() {
    const input = await this.alertController.create({
      header: 'Input',
      subHeader: 'Ingrese su nombre:',
      inputs: [
        {
          name: 'txtName',
          type: 'text',
          placeholder: 'Ingrese el titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtName;
          }
        }
      ]
    });

    await input.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('boton cancelar');
          }
        },
        {
          text: 'OK',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('boton ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
