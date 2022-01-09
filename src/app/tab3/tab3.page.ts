import { IBairro } from './../../interfaces/bairro';
import { ICidade } from './../../interfaces/cidade';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { EventosService } from 'src/services/eventos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listaBairros: IBairro[];
  constructor(private eventosService: EventosService, private router: Router, public loadingCtrl: LoadingController) {
    this.obterTodosBairros();
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
    this.obterTodosBairros();
    event.target.complete();
    setTimeout(() => {
      console.log('Async operation has ended');
    }, 3000);
  }

  obterTodosBairros() {
    this.basicLoader();
    this.eventosService.obterTodosBairros().subscribe({
      next: (data: IBairro[]) => {
        console.log(data);
        this.listaBairros = data;
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
