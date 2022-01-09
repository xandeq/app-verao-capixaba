import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IEvento } from 'src/interfaces/eventos';
import { EventosService } from 'src/services/eventos.service';

@Component({
  selector: 'app-locais-eventos',
  templateUrl: './locais-eventos.page.html',
  styleUrls: ['./locais-eventos.page.scss'],
})
export class LocaisEventosPage implements OnInit {
  evento: IEvento;
  idlocal: number;
  listaEventos: IEvento[];
  nomelocal: string;

  constructor(private route: ActivatedRoute,
    private eventosService: EventosService, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.idlocal = Number(this.route.snapshot.paramMap.get('id'));
    this.obterTodosEventos(this.idlocal);
  }

  obterTodosEventos(idlocal) {
    this.basicLoader();
    this.eventosService.obterTodosEventosLocal(idlocal).subscribe({
      next: (data: IEvento[]) => {
        console.log(data);
        this.listaEventos = data;
        this.nomelocal = this.listaEventos[0].local.nome;
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
    this.obterTodosEventos(this.idlocal);
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
