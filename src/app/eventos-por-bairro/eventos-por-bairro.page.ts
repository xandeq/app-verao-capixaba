import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IEvento } from 'src/interfaces/eventos';
import { EventosService } from 'src/services/eventos.service';

@Component({
  selector: 'app-eventos-por-bairro',
  templateUrl: './eventos-por-bairro.page.html',
  styleUrls: ['./eventos-por-bairro.page.scss'],
})
export class EventosPorBairroPage implements OnInit {

  evento: IEvento;
  idbairro: number;
  listaEventos: IEvento[];
  nomebairro: string;

  constructor(private route: ActivatedRoute,
    private eventosService: EventosService, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.idbairro = Number(this.route.snapshot.paramMap.get('id'));
    this.obterTodosEventos(this.idbairro);
  }

  obterTodosEventos(idbairro) {
    this.basicLoader();
    this.eventosService.obterTodosEventosPorBairro(idbairro).subscribe({
      next: (data: IEvento[]) => {
        console.log(data);
        this.listaEventos = data;
        this.nomebairro = this.listaEventos[0].local.bairro.nome;
        this.closeLoader();
      },
      error: (err: any) => {
        this.closeLoader();
        console.log(err);
      },
    });
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
    this.obterTodosEventos(this.idbairro);
    event.target.complete();
    setTimeout(() => {
      console.log('Async operation has ended');
    }, 3000);
  }

  getImagem(imagem: string): string {
    return 'https://veraocapixaba.azurewebsites.net/' + imagem;
  }

  abrirPaginaExterna(url: string) {
    window.open(url);
  }

}
