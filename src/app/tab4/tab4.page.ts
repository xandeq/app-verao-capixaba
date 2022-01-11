import { SessionService } from './../../services/session.service';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { EventosService } from 'src/services/eventos.service';
import { IEvento } from './../../interfaces/eventos';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  listaEventos: IEvento[];
  isLoading = false;

  constructor(private eventosService: EventosService,
    private router: Router,
    private datePipe: DatePipe,
    public loadingCtrl: LoadingController, private session: SessionService) {this.obterTodosEventos();}

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
          let ids = JSON.parse(this.session.getSession());
          console.log('ids', ids);
          console.log(data);
          this.listaEventos = data.filter(r=>ids.includes(r.id));
          console.log(this.listaEventos);
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
