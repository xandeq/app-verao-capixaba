import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public ids = [];
  constructor() {}

  setSession(id: any) {
    console.log('Entrou setSession');
    let idsget = JSON.parse(this.getSession());
    console.log('setSession idsget = ', idsget);
    idsget[id] = id;
    this.ids[id] = id;
    console.log('setSession = ', this.ids);
    var filtered = idsget.filter(function (el) {
      return el != null;
    });
    localStorage.setItem('id', JSON.stringify(filtered));
    console.log('setSession filtered = ', filtered);
    console.log('Acabou setSession');
  }

  getSession() {
    return localStorage.getItem('id');
  }

  updateItemSession(id: any) {
    let ids = JSON.parse(this.getSession());
    console.log('updateItemSession ids = ', ids);
    if (ids) {
      ids.splice(ids.indexOf(id), 1);
    }
    console.log('updateItemSession ids = ', ids);
    localStorage.removeItem('id');
    localStorage.setItem('id', JSON.stringify(ids));
    console.log('updateItemSession ids = ', ids);
  }

  setUserId() {
    const iduser =
      Date.now() + '-' + (Math.random() * (1000 - 1) + 1).toFixed();
    localStorage.setItem('iduser', iduser);
  }

  getIdUser() {
    return localStorage.getItem('iduser');
  }

  getCredentials() {
    return localStorage.getItem('authorization');
  }

  setCredentials() {
    localStorage.setItem('authorization', 'true');
  }
}
