import { IBairro } from './../interfaces/bairro';
import { ICidade } from './../interfaces/cidade';
import { ILocal } from './../interfaces/local';
import { IEvento } from './../interfaces/eventos';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  obterTodosEventos(): Observable<IEvento[]> {
    return this.http
      .get<IEvento[]>('https://veraocapixaba.azurewebsites.net/api/eventos')
      .pipe(
        tap((data: any) =>
          console.log('Obtendo Todos Eventos: ', JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  obterTodosLocais(): Observable<ILocal[]> {
    return this.http
      .get<ILocal[]>('https://veraocapixaba.azurewebsites.net/api/locais')
      .pipe(
        tap((data: any) =>
          console.log('Obtendo Todos Locais: ', JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  obterTodosEventosLocal(id: number): Observable<IEvento[]> {

    return this.http
      .get<IEvento[]>('https://veraocapixaba.azurewebsites.net/api/eventos/GetByIdLocal/' + id)
      .pipe(
        tap((data: any) =>
          console.log('Obtendo Todos Eventos do Local : ', JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  obterTodasCidades(): Observable<ICidade[]> {
    return this.http
      .get<ICidade[]>('https://veraocapixaba.azurewebsites.net/api/cidades/')
      .pipe(
        tap((data: any) =>
          console.log('Obtendo Todas Cidades : ', JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  obterTodosBairros(): Observable<IBairro[]> {
    return this.http
      .get<IBairro[]>('https://veraocapixaba.azurewebsites.net/api/bairros')
      .pipe(
        tap((data: any) =>
          console.log('Obtendo Todos Bairros : ', JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  obterTodosEventosPorBairro(id: number): Observable<IEvento[]> {
    return this.http
      .get<IEvento[]>('https://veraocapixaba.azurewebsites.net/api/eventos/GetByIdBairro/' + id)
      .pipe(
        tap((data: any) =>
          console.log('Obtendo Todos Eventos do Bairro/Cidade : ', JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Ocorreu um erro: ${err.status} . Mensagem de erro :  ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
