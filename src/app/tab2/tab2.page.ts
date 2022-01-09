import { ILocal } from './../../interfaces/local';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from 'src/services/eventos.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listaLocais: ILocal[];
  constructor(private eventosService: EventosService, private router: Router, public loadingCtrl: LoadingController) {
    this.obterTodosLocais();
  }

  basicLoader() {
    this.loadingCtrl.create({
        message: 'Por favor aguarde...',
        duration: 3000,
        translucent: true
    }).then((res) => {
        res.present();
    });
  }

  closeLoader() {
    this.loadingCtrl.dismiss().then((res) => {
        console.log('Loader hidden', res);
    }).catch((error) => {
        console.log(error);
    });
  }

  autoHideShow() {
    this.loadingCtrl.create({
      message: 'Dismiss after 3 seconds',
      duration: 3000
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((resi) => {
        console.log('Loader closed', resi);
      });
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.obterTodosLocais();
    event.target.complete();
    setTimeout(() => {
      console.log('Async operation has ended');
    }, 3000);
  }

  obterTodosLocais() {
    this.basicLoader();
    this.eventosService.obterTodosLocais().subscribe({
      next: (data: ILocal[]) => {
        console.log(data);
        this.listaLocais = data;
        this.closeLoader();
      },
      error: (err: any) => {
        this.closeLoader();
        console.log(err);
      },
    });
  }

  getImagem(imagem: string): string {
    return 'https://veraocapixaba.azurewebsites.net/' + imagem;
  }
}
