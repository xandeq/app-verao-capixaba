import { ILocal } from './../../interfaces/local';
import { EventosService } from 'src/services/eventos.service';
import { IEvento } from './../../interfaces/eventos';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Data,
  NavigationExtras,
} from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { ToastController } from '@ionic/angular';
import { SessionService } from './../../services/session.service';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.page.html',
  styleUrls: ['./eventos-detalhes.page.scss'],
})
export class EventosDetalhesPage implements OnInit {
  @ViewChild('map', { static: false }) mapView: ElementRef;

  evento: IEvento = {
    id: 17,
    nome: 'GUSTTAVO LIMA',
    descricao: '<div class="presentations>\r\n</div>',
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

  showLike = false;
  showUnLike = true;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private socialSharing: SocialSharing,
    public toastController: ToastController,
    private session:SessionService
  ) {}

  ngOnInit() {
    this.obterTodosEventos();
    this.eventoID = Number(this.route.snapshot.paramMap.get('id'));
  }

  basicLoader() {
    this.loadingCtrl
      .create({
        message: 'Por favor aguarde...',
        duration: 2000,
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

  obterTodosEventos() {
    this.basicLoader();
    this.eventosService.obterTodosEventos().subscribe({
      next: (data: IEvento[]) => {
        console.log(data);
        this.listaEventos = data;
        this.closeLoader();
        this.evento = this.listaEventos.find(
          (item) => item.id === this.eventoID
        );
        console.log(this.evento);
        //this.initMap(this.evento.local.latitude, this.evento.local.longitude);
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

  compartilhar(opcao, evento) {
    switch (opcao) {
      case 'facebook':
        this.socialSharing
          .shareViaFacebook(evento.nome, this.getImagem(evento.imagem), '')
          .then(() => {
            this.presentToast('Compartilhado no Facebook com sucesso!');
          })
          .catch((err) => {
            this.presentToast(err);
          });
        break;
      case 'instagram':
        this.socialSharing
          .shareViaInstagram(evento.nome, this.getImagem(evento.imagem))
          .then(() => {
            this.presentToast('Compartilhado no Instagram com sucesso!');
          })
          .catch((err) => {
            this.presentToast(err);
          });
        break;
      default:
        break;
    }
  }

  async presentToast(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
    });
    toast.present();
  }

  like(id) {
    this.showLike = true;
    this.showUnLike = false;
    this.session.setSession(id);
  }

  unlike(id) {
    this.showLike = false;
    this.showUnLike = true;
    this.session.updateItemSession(id);
  }
}
