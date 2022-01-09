import { EventosService } from 'src/services/eventos.service';
import { IEvento } from './../../interfaces/eventos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, NavigationExtras } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.page.html',
  styleUrls: ['./eventos-detalhes.page.scss'],
})
export class EventosDetalhesPage implements OnInit {
  evento: IEvento;
  eventoID: number;
  listaEventos: IEvento[];

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {
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

  ngOnInit() {
    this.obterTodosEventos();
    this.eventoID = Number(this.route.snapshot.paramMap.get('id'));
  }

  obterTodosEventos() {
    this.basicLoader();
    this.eventosService.obterTodosEventos().subscribe({
      next: (data: IEvento[]) => {
        console.log(data);
        this.listaEventos = data;
        this.evento = this.listaEventos.find(
          (item) => item.id === this.eventoID
        );
        console.log(this.evento);
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

  abrirPaginaExterna(url: string) {
    window.open(url);
  }
}
