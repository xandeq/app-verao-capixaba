import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { EventosService } from 'src/services/eventos.service';
import { IEvento } from './../../interfaces/eventos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  listaEventos: IEvento[];
  dataCorrente = new Date();
  dataCorrenteFormatada: string;
  isLoading = false;

  constructor(
    private eventosService: EventosService,
    private router: Router,
    private datePipe: DatePipe,
    public loadingCtrl: LoadingController
  ) {
    this.obterTodosEventos();
  }

  async basicLoader() {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        message: 'Por favor aguarde...',
        duration: 3000,
        translucent: true,
      })
      .then((res) => {
        res.present().then(() => {
          console.log('presented');
          if (!this.isLoading) {
            res.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }

  async closeLoader() {
    this.isLoading = false;
    return await this.loadingCtrl
      .dismiss()
      .then((res) => {
        console.log('Loader hidden', res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  autoHideShow() {
    this.loadingCtrl
      .create({
        message: 'Dismiss after 3 seconds',
        duration: 3000,
      })
      .then((res) => {
        res.present();
        res.onDidDismiss().then((resi) => {
          console.log('Loader closed', resi);
        });
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.obterTodosEventos();
    event.target.complete();
    setTimeout(() => {
      console.log('Async operation has ended');
    }, 3000);
  }

  formatarData(date: Date, format: string) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, format);
  }

  obterTodosEventos() {
    this.basicLoader();
    this.eventosService.obterTodosEventos().subscribe({
      next: (data: IEvento[]) => {
        this.listaEventos = data;
        console.log(data);
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

  public goToEventosDetalhes(id): void {
    this.router.navigate(['/eventosdetalhes', id]);
  }
}
