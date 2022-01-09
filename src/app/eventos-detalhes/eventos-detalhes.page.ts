import { ILocal } from './../../interfaces/local';
import { EventosService } from 'src/services/eventos.service';
import { IEvento } from './../../interfaces/eventos';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Data,
  NavigationExtras,
} from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.page.html',
  styleUrls: ['./eventos-detalhes.page.scss'],
})
export class EventosDetalhesPage implements OnInit {
  evento: IEvento = {
    id: 17,
    nome: 'GUSTTAVO LIMA',
    descricao:
      '<div class="presentations__Wrapper-sc-13vh2u7-0 pfHxi" style="box-sizing: border-box; border: 0px solid #e2e8f0; display: grid; row-gap: 20px; font-family: \'Open Sans\', sans-serif; background-color: #f9f9f9;">\r\n<div class="presentation__Wrapper-b05ml8-0 LmevU" style="box-sizing: border-box; border: 1px solid #d8d8d8; display: grid; grid-template-columns: 1fr; background: #ffffff;">\r\n<div class="presentation__Content-b05ml8-14 kLrBQX" style="box-sizing: border-box; border: 0px solid #e2e8f0; font-size: 0.8125rem; padding: 0px 22px 20px;">\r\n<div style="box-sizing: border-box; border: 0px solid #e2e8f0;">\r\n<div class="info items-center" style="box-sizing: border-box; border: 1px solid #5ebfb7; -webkit-box-align: center; align-items: center; display: flex; font-size: 0.8125rem; padding: 15px; background-color: #66ceaf;">\r\n<div style="box-sizing: border-box; border: 0px solid #e2e8f0;">\r\n<p style="box-sizing: border-box; border: 0px solid #e2e8f0; margin: 0px; word-break: break-word;">HORARIO ABERTURA: 15:00 hras</p>\r\n</div>\r\n</div>\r\n<br style="box-sizing: border-box; border: 0px solid #e2e8f0;" />\r\n<div class="success" style="box-sizing: border-box; border: 1px solid #72dd9d; -webkit-box-align: center; align-items: center; display: flex; font-size: 0.8125rem; padding: 15px; background-color: #b8f4d0;">\r\n<div style="box-sizing: border-box; border: 0px solid #e2e8f0;">\r\n<p style="box-sizing: border-box; border: 0px solid #e2e8f0; margin: 0px; word-break: break-word;">CLASSIFICA&Ccedil;&Atilde;O ET&Aacute;RIA: 18 Anos</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class="slug__ContentContainer-uuh74y-3 dqHTOb" style="box-sizing: border-box; border: 0px solid #e2e8f0; font-family: \'Open Sans\', sans-serif; background-color: #f9f9f9;">\r\n<div class="slug__Content-uuh74y-5 eKRqgf" style="box-sizing: border-box; border: 0px solid #e2e8f0; font-size: 0.8125rem; padding: 20px; background-color: #ffffff;">\r\n<h1 style="box-sizing: border-box; border: 0px solid #e2e8f0; font-size: 1.25rem; margin: 0px 0px 20px; word-break: break-word;" role="heading" aria-label="De inventor dos amores a Embaixador"><span style="box-sizing: border-box; border: 0px solid #e2e8f0; word-break: break-word;">De inventor dos amores a Embaixador</span></h1>\r\n<p style="box-sizing: border-box; border: 0px solid #e2e8f0; margin: 0px 0px 0.8125rem; word-break: break-word;">Cantor, m&uacute;sico, compositor e autodidata, Gusttavo Lima inicia sua carreira em Presidente Oleg&aacute;rio no interior de Minas e conquista o Brasil, se tornando um dos artistas de maior notoriedade nacional.</p>\r\n</div>\r\n</div>',
    imagem: 'images\\eventos\\7d2cfa52-1b76-416a-9079-48d0c7323543.jpg',
    data: new Date(),
    urlEvento: 'https://www.brasilticket.com.br/gusttavo-lima-guarapari',
    urlIngresso: 'https://www.brasilticket.com.br/gusttavo-lima-guarapari',
    localId: 2,
    local: {
      id: 2,
      nome: 'Cafe De La Musique Guarapari',
      tipoLogradouro: 'Rua',
      logradouro: 'Manoel Duarte Souza Mato',
      numero: '306-372',
      cep: '29208-050',
      logo: 'images\\locais\\10bba1d7-32c1-4822-be6c-c267cc7adbc9.jpg',
      latitude: -20.7401413,
      longitude: -40.5358182,
      bairroId: 1,
      bairro: {
        id: 1,
        nome: 'Meaípe',
        cidadeId: 1,
        cidade: {
          id: 1,
          nome: 'Guarapari',
        },
      },
    },
  };

  eventoID: number;
  listaEventos: IEvento[];

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {
    // this.evento.local = ;
    // this.evento.local.bairro.cidade.nome = '-';
    // this.evento.local.bairro.nome = '-';
  }

  basicLoader() {
    this.loadingCtrl
      .create({
        message: 'Por favor aguarde...',
        duration: 3000,
        translucent: true,
      })
      .then((res) => {
        res.present();
      });
  }

  closeLoader() {
    this.loadingCtrl
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
